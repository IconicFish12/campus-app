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
        `Error Acquired while creating Departement data`,
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
        `Error Acquired while Getting All Departement data`,
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
        `Error Acquired while Finding Departement data`,
      );
    }
  }

  async update(id: string, request: UpdateProgramManageDto) {
    try {
      await this.findOne(id);

      return await this.prisma.programs.update({
        where: {
          id: id,
        },
        data: {
          name: request.name,
          code: request.code,
          level: request.level,
          departmentId: request.departmentId,
        },
      });
    } catch {
      throw new InternalServerErrorException(
        `Error Acquired while Updating Departement data`,
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
        `Error Acquired while Deleting Departement data`,
      );
    }
    return `This action removes a #${id} programManageModule`;
  }
}
