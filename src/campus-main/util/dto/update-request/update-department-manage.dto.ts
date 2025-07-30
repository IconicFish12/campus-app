import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartmentManageDto } from '../../../../util/dto/create-request/create-department-manage.dto';

export class UpdateDepartmentManageDto extends PartialType(
  CreateDepartmentManageDto,
) {}
