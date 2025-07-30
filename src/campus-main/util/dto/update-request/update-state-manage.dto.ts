import { PartialType } from '@nestjs/mapped-types';
import { CreateStateManageDto } from '../../../../../../../util/dto/create-request/create-state-manage.dto';

export class UpdateStateManageDto extends PartialType(CreateStateManageDto) {}
