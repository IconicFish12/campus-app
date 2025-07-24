import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Injectable()
export class CampusUsersManageService {
  constructor(private readonly prisma: CampusDbService) {}
  async create(createRequest: CreateUserDto) {
    try {
      return await this.prisma.user.create({
        data: {
          firstName: createRequest.firstName,
          middleName: createRequest.middleName,
          lastName: createRequest.lastName,
          email: createRequest.email,
          password: createRequest.password,
          status: createRequest.status,
          gender: createRequest.gender,
          profilePicture: createRequest.profilePicture,
        },
      });
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async findAll() {
    try {
      return await this.prisma.user.findMany({
        include: {},
        omit: {
          password: true,
        },
        orderBy: {
          createdAt: 'asc',
        },
      });
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: string) {
    try {
      return await this.prisma.user.findUniqueOrThrow({
        where: { id: id },
        include: {},
        omit: {
          password: true,
        },
      });
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async update(id: string, updateRequest: UpdateUserDto) {
    try {
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
      throw new InternalServerErrorException();
    }
  }

  async remove(id: string) {
    try {
      return this.prisma.user.delete({
        where: { id: id },
      });
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async uploadFile() {}
}
