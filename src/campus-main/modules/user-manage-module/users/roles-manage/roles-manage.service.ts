import { Injectable } from '@nestjs/common';
import { CreateRolesManageDto } from './dto/create-roles-manage.dto';
import { UpdateRolesManageDto } from './dto/update-roles-manage.dto';

@Injectable()
export class RolesManageService {
  create(createRolesManageDto: CreateRolesManageDto) {
    return 'This action adds a new rolesManage';
  }

  findAll() {
    return `This action returns all rolesManage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rolesManage`;
  }

  update(id: number, updateRolesManageDto: UpdateRolesManageDto) {
    return `This action updates a #${id} rolesManage`;
  }

  remove(id: number) {
    return `This action removes a #${id} rolesManage`;
  }
}
