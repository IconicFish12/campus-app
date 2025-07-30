import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from '../../../util/dto/create-request/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';
import bcrypt from 'bcrypt';

@Injectable()
export class CampusUsersManageService {
  constructor(private readonly prisma: CampusDbService) {}
  async create(createRequest: CreateUserDto) {
    try {
      const hashedPassword = await this.passwordHashing(createRequest.password);

      return await this.prisma.user.create({
        data: {
          firstName: createRequest.firstName,
          middleName: createRequest.middleName,
          lastName: createRequest.lastName,
          email: createRequest.email,
          password: hashedPassword,
          gender: createRequest.gender,
          profilePicture: createRequest.profilePicture,
        },
        omit: {
          password: true,
        },
      });
    } catch {
      throw new InternalServerErrorException(
        'Error Acquired while Creating Campus User data',
      );
    }
  }

  async findAll() {
    try {
      return await this.prisma.user.findMany({
        where: {
          // lecturer: { NOT: {  } },
        },
        include: {
          Address: {
            select: {
              id: true,
              fullAddress: true,
              city: { select: { name: true } },
            },
          },
          employee: { select: { userId: true, employeeCode: true } },
          lecturer: { select: { lecturerId: true, nidn: true } },
          student: { select: { studentId: true, nim: true } },
          _count: {
            select: { userRoles: true },
          },
        },
        omit: {
          password: true,
        },
        orderBy: {
          createdAt: 'asc',
        },
      });
    } catch {
      throw new InternalServerErrorException(
        'Error Acquired While Getting Campus User data',
      );
    }
  }

  async findOne(id: string) {
    try {
      return await this.prisma.user.findUniqueOrThrow({
        where: { id: id },
        include: {
          Address: {
            select: {
              id: true,
              fullAddress: true,
              postalCode: true,
              city: {
                select: {
                  id: true,
                  name: true,
                  state: {
                    select: {
                      id: true,
                      name: true,
                      country: { select: { id: true, name: true } },
                    },
                  },
                },
              },
            },
          },
          employee: {
            select: {
              userId: true,
              employeeCode: true,
              position: true,
              department: true,
              hireDate: true,
              status: true,
            },
          },
          lecturer: {
            select: {
              lecturerId: true,
              nidn: true,
              academicRank: true,
              program: { select: { id: true, name: true, code: true } },
              employmentStatus: true,
              specializations: true,
              hireDate: true,
            },
          },
          student: {
            select: {
              studentId: true,
              nim: true,
              enrollmentYear: true,
              currentSemester: true,
              academicStatus: true,
              gpa: true,
              admissionType: true,
              program: {
                select: { id: true, name: true, code: true, level: true },
              },
            },
          },
          userRoles: {
            select: {
              role: {
                select: { id: true, name: true, description: true },
              },
            },
          },
        },
        omit: {
          password: true,
        },
      });
    } catch {
      throw new InternalServerErrorException(
        'Error Acquired While Getting Campus User data',
      );
    }
  }

  async update(id: string, updateRequest: UpdateUserDto) {
    try {
      await this.findOne(id);

      return await this.prisma.user.update({
        where: { id: id },
        data: {
          firstName: updateRequest.firstName,
          middleName: updateRequest.middleName,
          lastName: updateRequest.lastName,
          email: updateRequest.email,
          status: updateRequest.status,
          gender: updateRequest.gender,
          profilePicture: updateRequest.profilePicture,
        },
        omit: {
          password: true,
        },
      });
    } catch {
      throw new InternalServerErrorException(
        'Error Acquired while Updating Campus User data',
      );
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id);
      return this.prisma.user.delete({
        where: { id: id },
      });
    } catch {
      // errors.message;
      throw new InternalServerErrorException(
        'Error Acquired while Deleting Campus User data',
      );
    }
  }

  async uploadFile() {}

  async passwordHashing(password: string): Promise<string> {
    return await bcrypt.hash(password, 15);
  }

  async compare(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
}
