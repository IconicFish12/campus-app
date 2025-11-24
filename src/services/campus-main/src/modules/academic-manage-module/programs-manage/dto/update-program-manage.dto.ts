import { PartialType } from '@nestjs/mapped-types';
import { CreateProgramManageDto } from '../../../util/dto/create-request/create-program-manage.dto';

export class UpdateProgramManageDto extends PartialType(
  CreateProgramManageDto,
) {}
