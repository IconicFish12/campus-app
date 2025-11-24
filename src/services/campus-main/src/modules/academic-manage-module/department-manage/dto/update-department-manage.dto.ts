import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartmentManageDto } from './create-department-manage.dto';

export class UpdateDepartmentManageDto extends PartialType(
  CreateDepartmentManageDto,
) {}
