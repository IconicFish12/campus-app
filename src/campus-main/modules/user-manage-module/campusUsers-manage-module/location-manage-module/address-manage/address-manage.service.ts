import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAddressManageDto } from './dto/create-address-manage.dto';
import { UpdateAddressManageDto } from './dto/update-address-manage.dto';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Injectable()
export class AddressManageService {
  constructor(private readonly prisma: CampusDbService) {}
  async create(createRequest: CreateAddressManageDto) {
    try {
      const cityData = await this.prisma.address.findUnique({
        where: { id: createRequest.cityId },
      });

      const userData = await this.prisma.user.findUnique({
        where: { id: createRequest.userId },
      });

      if (cityData == null && userData == null) {
        throw new NotFoundException();
      }

      return this.prisma.address.create({
        data: {
          fullAddress: createRequest.fullAddress,
          postalCode: createRequest.postalCode,
          city: { connect: { id: createRequest.cityId } },
          user: { connect: { id: createRequest.userId } },
        },
      });
    } catch {
      throw new InternalServerErrorException(
        `Error Acquired while Creating User Address Data`,
      );
    }
  }

  async findAll() {
    try {
      return await this.prisma.address.findMany({
        include: {
          city: { include: { state: { include: { country: true } } } },
        },
        orderBy: {
          createdAt: 'asc',
        },
      });
    } catch {
      throw new InternalServerErrorException(
        `Error Acquired while Getting User Address Data`,
      );
    }
  }

  async findOne(id: string) {
    try {
      return await this.prisma.address.findUniqueOrThrow({
        where: { id: id },
        include: {
          city: { include: { state: { include: { country: true } } } },
        },
      });
    } catch {
      throw new InternalServerErrorException(
        `Error Acquired while Getting User Address Data`,
      );
    }
  }

  async update(id: string, updateRequest: UpdateAddressManageDto) {
    try {
      await this.findOne(id);

      if (updateRequest.userId && updateRequest.cityId) {
        const cityData = await this.prisma.address.findUnique({
          where: { id: updateRequest.cityId },
        });

        const userData = await this.prisma.user.findUnique({
          where: { id: updateRequest.userId },
        });

        if (cityData == null && userData == null) {
          throw new NotFoundException();
        }
      }

      return await this.prisma.address.update({
        where: { id: id },
        data: {
          fullAddress: updateRequest.fullAddress,
          postalCode: updateRequest.postalCode,
          city: updateRequest.cityId
            ? { connect: { id: updateRequest.cityId } }
            : undefined,
          user: updateRequest.userId
            ? { connect: { id: updateRequest.userId } }
            : undefined,
          updatedAt: new Date(),
        },
      });
    } catch {
      throw new InternalServerErrorException(
        `Error Acquired while Updating User Address Data`,
      );
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id);

      return await this.prisma.address.delete({
        where: { id: id },
      });
    } catch {
      throw new InternalServerErrorException(
        `Error Acquired while Deleting User Address Data`,
      );
    }
  }
}
