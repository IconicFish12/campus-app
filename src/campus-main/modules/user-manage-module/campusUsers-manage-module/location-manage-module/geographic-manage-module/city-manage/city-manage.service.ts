import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateCityManageDto } from './dto/create-city-manage.dto';
import { UpdateCityManageDto } from './dto/update-city-manage.dto';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Injectable()
export class CityManageService {
  constructor(private readonly prisma: CampusDbService) {}
  async create(createRequest: CreateCityManageDto) {
    try {
      const stateExists = await this.prisma.state.findUnique({
        where: { id: createRequest.stateId },
      });

      if (!stateExists) {
        throw new BadRequestException(
          `Province or country state with ID "${createRequest.stateId}" is not found`,
        );
      }

      return await this.prisma.city.create({
        data: {
          name: createRequest.name,
          state: { connect: { id: createRequest.stateId } },
        },
      });
    } catch {
      throw new InternalServerErrorException(
        'Error Acquired While Creating Country Data',
      );
    }
  }

  async findAll() {
    try {
      return await this.prisma.city.findMany({
        include: {
          state: {
            select: {
              id: true,
              name: true,
              country: {
                select: { id: true, name: true },
              },
            },
          },
          _count: {
            select: { addresses: true },
          },
        },
        orderBy: { name: 'asc' },
      });
    } catch {
      throw new InternalServerErrorException(
        'Error Acquired While Creating Country Data',
      );
    }
  }

  async findOne(id: string) {
    try {
      return await this.prisma.city.findUniqueOrThrow({
        where: { id: id },
        include: {
          state: {
            select: {
              id: true,
              name: true,
              country: {
                select: { id: true, name: true },
              },
            },
          },
          _count: {
            select: { addresses: true },
          },
        },
      });
    } catch {
      throw new InternalServerErrorException(
        'Error Acquired While Creating Country Data',
      );
    }
  }

  async update(id: string, updateRequest: UpdateCityManageDto) {
    try {
      await this.findOne(id);

      if (updateRequest.stateId) {
        const stateExists = await this.prisma.state.findUnique({
          where: { id: updateRequest.stateId },
        });
        if (!stateExists) {
          throw new BadRequestException(
            `Province or country state with ID "${updateRequest.stateId}" is not found`,
          );
        }
      }

      return await this.prisma.city.update({
        where: { id: id },
        data: {
          name: updateRequest.name,
          state: updateRequest.stateId
            ? { connect: { id: updateRequest.stateId } }
            : undefined,
          updatedAt: new Date(),
        },
      });
    } catch {
      throw new InternalServerErrorException(
        'Error Acquired While Creating Country Data',
      );
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id);

      return await this.prisma.city.delete({
        where: { id: id },
      });
    } catch {
      throw new InternalServerErrorException(
        'Error Acquired While Creating Country Data',
      );
    }
  }
}
