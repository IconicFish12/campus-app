import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateDepartmentManageDto } from '../../../util/dto/create-request/create-department-manage.dto';
import { UpdateDepartmentManageDto } from './dto/update-department-manage.dto';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';
@Injectable()
export class DepartmentManageService {
  private readonly logger = new Logger(DepartmentManageService.name);
  constructor(private prisma: CampusDbService) {}

  async create(request: CreateDepartmentManageDto) {
    try {
      return await this.prisma.departments.create({
        data: {
          name: request.name,
          code: request.code,
          description: request.description,
        },
      });
    } catch {
      throw new InternalServerErrorException(
        `Error Acquired while creating Departement data`,
      );
    }
  }

  async findAll() {
    try {
      return await this.prisma.departments.findMany({
        include: {
          _count: { select: { programs: true } },
          programs: {
            select: { id: true, name: true, code: true },
            orderBy: { name: 'asc' },
          },
        },
        orderBy: {
          name: 'asc',
        },
      });
    } catch {
      throw new InternalServerErrorException(
        `Error Acquired while Getting All Departement data`,
      );
    }
  }

  async findOne(id: string) {
    try {
      const department = await this.prisma.departments.findUniqueOrThrow({
        where: { id: id },
        include: {
          _count: { select: { programs: true } },
          programs: {
            select: { id: true, name: true, code: true },
            orderBy: { name: 'asc' },
          },
        },
      });

      return department;
    } catch (error) {
      if (error instanceof Error) {
        this.logger.error(
          `Error saat mencari departemen dengan ID ${id}: ${error.message}`,
          error.stack,
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
          id: id,
          name: requestUpdate.name,
          code: requestUpdate.code,
          description: requestUpdate.description,
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
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
    } catch {
      throw new InternalServerErrorException(
        `Error Acquired while Deleting Departement data`,
      );
    }
  }
}
