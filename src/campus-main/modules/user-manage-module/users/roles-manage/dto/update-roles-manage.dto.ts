import { PartialType } from '@nestjs/mapped-types';
import { CreateRolesManageDto } from './create-roles-manage.dto';

export class UpdateRolesManageDto extends PartialType(CreateRolesManageDto) {}
