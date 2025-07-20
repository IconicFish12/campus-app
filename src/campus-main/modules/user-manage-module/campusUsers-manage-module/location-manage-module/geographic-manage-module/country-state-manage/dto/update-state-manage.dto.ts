import { PartialType } from '@nestjs/mapped-types';
import { CreateStateManageDto } from './create-state-manage.dto';

export class UpdateStateManageDto extends PartialType(CreateStateManageDto) {}
