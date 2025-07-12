import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersRolesManageDto } from './create-users-roles-manage.dto';

export class UpdateUsersRolesManageDto extends PartialType(CreateUsersRolesManageDto) {}
