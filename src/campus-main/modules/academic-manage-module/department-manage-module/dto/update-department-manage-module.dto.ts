import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartmentManageModuleDto } from './create-department-manage-module.dto';

export class UpdateDepartmentManageModuleDto extends PartialType(CreateDepartmentManageModuleDto) {}
