import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepartmentManageModuleService } from './department-manage-module.service';
import { CreateDepartmentManageModuleDto } from './dto/create-department-manage-module.dto';
import { UpdateDepartmentManageModuleDto } from './dto/update-department-manage-module.dto';

@Controller('department-manage-module')
export class DepartmentManageModuleController {
  constructor(private readonly departmentManageModuleService: DepartmentManageModuleService) {}

  @Post()
  create(@Body() createDepartmentManageModuleDto: CreateDepartmentManageModuleDto) {
    return this.departmentManageModuleService.create(createDepartmentManageModuleDto);
  }

  @Get()
  findAll() {
    return this.departmentManageModuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentManageModuleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepartmentManageModuleDto: UpdateDepartmentManageModuleDto) {
    return this.departmentManageModuleService.update(+id, updateDepartmentManageModuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentManageModuleService.remove(+id);
  }
}
