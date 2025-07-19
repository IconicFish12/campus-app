import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateCountryManageDto } from './dto/create-country-manage.dto';
import { UpdateCountryManageDto } from './dto/update-country-manage.dto';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Injectable()
export class CountryManageService {
  constructor(private readonly prisma: CampusDbService) {}
  async create(createRequest: CreateCountryManageDto) {
    try {
      return await this.prisma.country.create({
        data: {
          name: createRequest.name,
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
      return await this.prisma.country.findMany({
        select: {
          _count: true,
          states: {
            select: {
              _count: true,
            },
            orderBy: {
              createdAt: 'asc',
            },
          },
        },
        orderBy: {
          createdAt: 'asc',
        },
      });
    } catch {
      throw new InternalServerErrorException(
        'Error Acquired While Creating Country Data',
      );
    }
  }

  async findOne(id: string) {
    try {
      return await this.prisma.country.findFirst({
        where: { id: id },
        include: {
          _count: true,
          states: {
            select: {
              _count: true,
            },
            orderBy: {
              createdAt: 'asc',
            },
          },
        },
      });
    } catch {
      throw new InternalServerErrorException(
        'Error Acquired While Getting Country Data',
      );
    }
  }

  async update(id: string, updaterequest: UpdateCountryManageDto) {
    try {
      return await this.prisma.country.update({
        where: {
          id: id,
        },
        data: {
          name: updaterequest.name,
        },
      });
    } catch {
      throw new InternalServerErrorException(
        'Error Acquired While Updating Country Data',
      );
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.country.delete({
        where: {
          id: id,
        },
      });
    } catch {
      throw new InternalServerErrorException(
        'Error Acquired While Deleting Country Data',
      );
    }
  }
}
