import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateDepartmentManageDto } from './dto/create-department-manage.dto';
import { UpdateDepartmentManageDto } from './dto/update-department-manage.dto';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime/library';

@Injectable()
export class DepartmentManageService {
  constructor(private prisma: CampusDbService) {}

  async create(request: CreateDepartmentManageDto) {
    try {
      return await this.prisma.departments.create({
        data: {
          name: request.name,
          code: request.code,
          description: request.desciption,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code == 'P2002') {
          throw new BadRequestException(`${error.message}`);
        }
      }
      throw new InternalServerErrorException(
        `Error Acquired while creating Departement data`,
      );
    }
  }

  async findAll() {
    try {
      return await this.prisma.departments.findMany({
        include: {
          lecturers: true,
          programs: true,
        },
        orderBy: {
          createdAt: 'asc',
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        // P1001 - Can't reach database server
        // P2000 - Invalid input data for field
        if (error.code === 'P1000' || error.code === 'P1001') {
          console.error('Database connection error:', error.message);
          throw new InternalServerErrorException(`Cannot Connect to Database`);
        }
      }

      if (error instanceof PrismaClientValidationError) {
        console.error('Prisma query validation error:', error);
        throw new InternalServerErrorException(
          'An internal error occurred in the database query',
        );
      }

      throw new InternalServerErrorException(
        `Error Acquired while Getting All Departement data`,
      );
    }
  }

  async findOne(id: string) {
    try {
      const department = await this.prisma.departments.findFirst({
        select: {
          name: true,
          code: true,
          description: true,
          _count: {
            select: {
              lecturers: true,
              programs: true,
            },
          },
          lecturers: true,
          programs: true,
        },
        where: {
          id: id,
        },
      });

      if (!department) {
        throw new NotFoundException(`Department with ${id} is Not Found`);
      }

      return department;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        // P1001 - Can't reach database server
        // P2000 - Invalid input data for field
        if (error.code === 'P1000' || error.code === 'P1001') {
          console.error('Database connection error:', error.message);
          throw new InternalServerErrorException(`Cannot Connect to Database`);
        }
      }

      if (error instanceof PrismaClientValidationError) {
        console.error('Prisma query validation error:', error);
        throw new InternalServerErrorException(
          'An internal error occurred in the database query',
        );
      }

      throw new InternalServerErrorException(
        `Error Acquired while Finding Departement data`,
      );
    }
  }

  async update(id: string, requestUpdate: UpdateDepartmentManageDto) {
    try {
      await this.findOne(id);

      return this.prisma.departments.update({
        where: {
          id: id,
        },
        data: {
          name: requestUpdate.name,
          code: requestUpdate.code,
          description: requestUpdate.desciption,
          id: id,
        },
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }

      if (error instanceof PrismaClientKnownRequestError) {
        // P1001 - Can't reach database server
        // P2000 - Invalid input data for field
        if (error.code === 'P1000' || error.code === 'P1001') {
          console.error('Database connection error:', error.message);
          throw new InternalServerErrorException(`Cannot Connect to Database`);
        }

        if (error.code == 'P2002') {
          throw new BadRequestException(`${error.message}`);
        }

        if (error.code === 'P2025') {
          throw new NotFoundException(
            `Departemen dengan ID "${id}" tidak ditemukan.`,
          );
        }
      }

      if (error instanceof PrismaClientValidationError) {
        console.error('Kesalahan validasi query Prisma:', error);
        throw new InternalServerErrorException(
          'an internal error occurred in the database query.',
        );
      }

      throw new InternalServerErrorException(
        `Error Acquired while updating Departement data`,
      );
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id);

      return await this.prisma.departments.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }

      if (error instanceof PrismaClientKnownRequestError) {
        // P1001 - Can't reach database server
        // P2000 - Invalid input data for field
        if (error.code === 'P1000' || error.code === 'P1001') {
          console.error('Database connection error:', error.message);
          throw new InternalServerErrorException(`Cannot Connect to Database`);
        }

        if (error.code === 'P2025') {
          throw new NotFoundException(
            `Departemen dengan ID "${id}" tidak ditemukan.`,
          );
        }
      }

      throw new InternalServerErrorException(
        `Error Acquired while Deleting Departement data`,
      );
    }
  }
}
