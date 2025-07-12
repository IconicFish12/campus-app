import { PartialType } from '@nestjs/mapped-types';
import { CreateProgramManageDto } from './create-program-manage.dto';

export class UpdateProgramManageDto extends PartialType(
  CreateProgramManageDto,
) {}
