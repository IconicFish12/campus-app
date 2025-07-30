import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersRolesManageDto } from '../../../../../../util/dto/create-request/create-users-roles-manage.dto';

export class UpdateUsersRolesManageDto extends PartialType(
  CreateUsersRolesManageDto,
) {}
