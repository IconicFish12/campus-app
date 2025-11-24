import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateStateManageDto } from './dto/create-state-manage.dto';
import { UpdateStateManageDto } from './dto/update-state-manage.dto';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Injectable()
export class StateManageService {
  constructor(private readonly prisma: CampusDbService) {}
  async create(createRequest: CreateStateManageDto) {
    try {
      const countryExits = await this.prisma.country.findUnique({
        where: {
          id: createRequest.countryId,
        },
      });

      if (!countryExits) {
        throw new BadRequestException(
          `Country Data with id ${createRequest.countryId} is not found`,
        );
      }

      return await this.prisma.state.create({
        data: {
          name: createRequest.name,
          country: {
            connect: {
              id: createRequest.countryId,
            },
          },
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
      return await this.prisma.state.findMany({
        include: {
          _count: { select: { cities: true } },
          country: {
            select: { id: true, name: true },
          },
          cities: {
            select: { id: true, name: true },
            orderBy: {
              name: 'asc',
            },
          },
        },
        orderBy: { name: 'asc' },
      });
    } catch {
      throw new InternalServerErrorException(
        'Error Acquired While Getting Country Data',
      );
    }
  }

  async findOne(id: string) {
    try {
      const state = await this.prisma.state.findUniqueOrThrow({
        where: { id: id },
        include: {
          _count: { select: { cities: true } },
          country: {
            select: { id: true, name: true },
          },
          cities: {
            select: { id: true, name: true },
            orderBy: { name: 'asc' },
          },
        },
      });

      return state;
    } catch {
      throw new InternalServerErrorException(
        'Error Acquired While Getting Country Data',
      );
    }
  }

  async update(id: string, updateRequest: UpdateStateManageDto) {
    try {
      await this.findOne(id);

      if (updateRequest.countryId) {
        const countryExists = await this.prisma.country.findUnique({
          where: { id: updateRequest.countryId },
        });
        if (!countryExists) {
          throw new BadRequestException(
            `Country with ID "${updateRequest.countryId}" is not found`,
          );
        }
      }

      return await this.prisma.state.update({
        where: { id: id },
        data: {
          name: updateRequest.name,
          country: updateRequest.countryId
            ? { connect: { id: updateRequest.countryId } }
            : undefined,
          updatedAt: new Date(),
        },
      });
    } catch {
      throw new InternalServerErrorException(
        'Error Acquired While updating Country Data',
      );
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id);

      return await this.prisma.state.delete({
        where: { id: id },
      });
    } catch {
      throw new InternalServerErrorException(
        'Error Acquired While Deleting Country Data',
      );
    }
  }
}
