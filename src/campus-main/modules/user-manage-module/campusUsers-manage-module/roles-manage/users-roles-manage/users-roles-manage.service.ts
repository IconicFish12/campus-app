import { Injectable } from '@nestjs/common';
import { CreateUsersRolesManageDto } from '../../../../../util/dto/create-request/create-users-roles-manage.dto';
import { UpdateUsersRolesManageDto } from './dto/update-users-roles-manage.dto';

@Injectable()
export class UsersRolesManageService {
  create(createUsersRolesManageDto: CreateUsersRolesManageDto) {
    return 'This action adds a new usersRolesManage';
  }

  findAll() {
    return `This action returns all usersRolesManage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersRolesManage`;
  }

  update(id: number, updateUsersRolesManageDto: UpdateUsersRolesManageDto) {
    return `This action updates a #${id} usersRolesManage`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersRolesManage`;
  }
}
