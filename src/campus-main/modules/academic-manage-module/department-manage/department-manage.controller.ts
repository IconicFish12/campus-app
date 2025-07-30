import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DepartmentManageService } from './department-manage.service';
import { CreateDepartmentManageDto } from '../../../util/dto/create-request/create-department-manage.dto';
import { UpdateDepartmentManageDto } from './dto/update-department-manage.dto';

@Controller()
export class DepartmentManageController {
  constructor(
    private readonly departmentManageModuleService: DepartmentManageService,
  ) {}

  @Post()
  create(@Body() createDepartmentManageModuleDto: CreateDepartmentManageDto) {
    return this.departmentManageModuleService.create(
      createDepartmentManageModuleDto,
    );
  }

  @Get()
  findAll() {
    return this.departmentManageModuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentManageModuleService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDepartmentManageModuleDto: UpdateDepartmentManageDto,
  ) {
    return this.departmentManageModuleService.update(
      id,
      updateDepartmentManageModuleDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentManageModuleService.remove(id);
  }
}
