import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProgramManageDto } from './dto/create-program-manage.dto';
import { UpdateProgramManageDto } from './dto/update-program-manage.dto';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';
@Injectable()
export class ProgramManageService {
  constructor(private readonly prisma: CampusDbService) {}
  async create(request: CreateProgramManageDto) {
    try {
      return await this.prisma.programs.create({
        data: {
          name: request.name,
          code: request.code,
          level: request.level,
          departmentId: request.departmentId,
        },
      });
    } catch {
      throw new InternalServerErrorException(
        `Error Acquired while creating Study Program data`,
      );
    }
  }

  async findAll() {
    try {
      return await this.prisma.programs.findMany({
        include: {
          _count: true,
          admissionQuotas: true,
          classes: true,
          courses: true,
          department: true,
          students: true,
        },
        orderBy: {
          createdAt: 'asc',
        },
      });
    } catch {
      throw new InternalServerErrorException(
        `Error Acquired while Getting All Study Program data`,
      );
    }
  }

  async findOne(id: string) {
    try {
      const data = await this.prisma.programs.findFirst({
        where: {
          id: id,
        },
        include: {
          _count: true,
          admissionQuotas: true,
          classes: true,
          courses: true,
          department: true,
          students: true,
        },
        orderBy: {
          createdAt: 'asc',
        },
      });

      if (!data) {
        throw new NotFoundException('Data Study Programs is not found');
      }

      return data;
    } catch {
      throw new InternalServerErrorException(
        `Error Acquired while Finding Study Program data`,
      );
    }
  }

  async update(id: string, request: UpdateProgramManageDto) {
    try {
      const existData = await this.findOne(id);

      return await this.prisma.programs.update({
        where: {
          id: id,
        },
        data: {
          name: request.name || existData.name,
          code: request.code || existData.code,
          level: request.level || existData.level,
          departmentId: request.departmentId || existData.departmentId,
          updatedAt: new Date(),
        },
      });
    } catch {
      throw new InternalServerErrorException(
        `Error Acquired while Updating Study Program data`,
      );
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id);

      return await this.prisma.programs.delete({
        where: {
          id: id,
        },
      });
    } catch {
      throw new InternalServerErrorException(
        `Error Acquired while Deleting Study Program data`,
      );
    }
  }
}
