import { PartialType } from '@nestjs/mapped-types';
import { CreateGeneralScheduleDto } from './create-general-schedule.dto';

export class UpdateGeneralScheduleDto extends PartialType(CreateGeneralScheduleDto) {}
