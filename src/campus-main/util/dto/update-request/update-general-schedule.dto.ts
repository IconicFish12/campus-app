import { PartialType } from '@nestjs/mapped-types';
import { CreateGeneralScheduleDto } from '../../../../../util/dto/create-request/create-general-schedule.dto';

export class UpdateGeneralScheduleDto extends PartialType(
  CreateGeneralScheduleDto,
) {}
