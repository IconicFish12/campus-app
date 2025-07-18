import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateDepartmentManageDto } from './dto/create-department-manage.dto';
import { UpdateDepartmentManageDto } from './dto/update-department-manage.dto';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';
@Injectable()
export class DepartmentManageService {
  constructor(private prisma: CampusDbService) {}

  async create(request: CreateDepartmentManageDto) {
    try {
      console.log(`[REQUEST]: ${request.name} `);
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
          _count: true,
          lecturers: true,
          programs: true,
        },
        orderBy: {
          createdAt: 'asc',
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
      const department = await this.prisma.departments.findFirst({
        where: {
          id: id,
        },
        include: {
          _count: true,
          lecturers: true,
          programs: true,
        },
        orderBy: {
          createdAt: 'asc',
        },
      });

      if (!department) {
        throw new NotFoundException(`Department with ${id} is Not Found`);
      }

      return department;
    } catch {
      throw new InternalServerErrorException(
        `Error Acquired while Finding Departement data`,
      );
    }
  }

  async update(id: string, requestUpdate: UpdateDepartmentManageDto) {
    try {
      const existData = await this.findOne(id);

      return this.prisma.departments.update({
        where: {
          id: id,
        },
        data: {
          id: id,
          name: requestUpdate.name || existData.name,
          code: requestUpdate.code || existData.code,
          description: requestUpdate.description || existData.description,
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
