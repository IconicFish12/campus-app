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
  async create(createRequest: CreateProgramManageDto) {
    try {
      const departmentData = await this.prisma.departments.findUnique({
        where: { id: createRequest.departmentId },
      });

      if (departmentData == null) {
        throw new NotFoundException(
          `Department data with ID ${createRequest.departmentId} is not found`,
        );
      }

      return await this.prisma.programs.create({
        data: {
          name: createRequest.name,
          code: createRequest.code,
          level: createRequest.level,
          department: { connect: { id: createRequest.departmentId } },
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
          department: {
            select: {
              id: true,
              name: true,
              code: true,
            },
          },
          _count: {
            select: {
              courses: true,
              students: true,
              admissionQuotas: true,
              classes: true,
            },
          },
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
      const data = await this.prisma.programs.findUniqueOrThrow({
        where: {
          id: id,
        },
        include: {
          department: {
            select: {
              id: true,
              name: true,
              code: true,
              description: true,
            },
          },
          admissionQuotas: {
            select: { id: true, academicYearId: true, quota: true },
            orderBy: { academicYear: { year: 'desc' } },
          },
          classes: {
            select: { id: true, className: true },
            orderBy: { className: 'asc' },
          },
          courses: {
            select: { id: true, name: true, code: true, credits: true },
            orderBy: { name: 'asc' },
          },
          students: {
            select: {
              studentId: true,
              nim: true,
              user: { select: { firstName: true, lastName: true } },
            },
            orderBy: { user: { lastName: 'asc' } },
          },
          _count: {
            select: {
              courses: true,
              students: true,
              admissionQuotas: true,
              classes: true,
            },
          },
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

  async update(id: string, updateRequest: UpdateProgramManageDto) {
    try {
      await this.findOne(id);

      if (updateRequest.departmentId) {
        const departmentData = await this.prisma.departments.findUnique({
          where: { id: updateRequest.departmentId },
        });

        if (departmentData == null) {
          throw new NotFoundException(
            `Department data with ID ${updateRequest.departmentId} is not found`,
          );
        }
      }

      return await this.prisma.programs.update({
        where: {
          id: id,
        },
        data: {
          name: updateRequest.name,
          code: updateRequest.code,
          level: updateRequest.level,
          departmentId: updateRequest.departmentId,
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
