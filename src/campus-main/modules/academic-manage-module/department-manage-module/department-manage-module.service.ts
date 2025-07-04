import { Injectable } from '@nestjs/common';
import { CreateDepartmentManageModuleDto } from './dto/create-department-manage-module.dto';
import { UpdateDepartmentManageModuleDto } from './dto/update-department-manage-module.dto';

@Injectable()
export class DepartmentManageModuleService {
  create(createDepartmentManageModuleDto: CreateDepartmentManageModuleDto) {
    return 'This action adds a new departmentManageModule';
  }

  findAll() {
    return `This action returns all departmentManageModule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} departmentManageModule`;
  }

  update(id: number, updateDepartmentManageModuleDto: UpdateDepartmentManageModuleDto) {
    return `This action updates a #${id} departmentManageModule`;
  }

  remove(id: number) {
    return `This action removes a #${id} departmentManageModule`;
  }
}
