import { PartialType } from '@nestjs/mapped-types';
import { CreateRolesManageDto } from '../../../util/dto/create-request/create-roles-manage.dto';

export class UpdateRolesManageDto extends PartialType(CreateRolesManageDto) {}
