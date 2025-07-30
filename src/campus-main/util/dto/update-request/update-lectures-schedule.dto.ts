import { PartialType } from '@nestjs/mapped-types';
import { CreateLecturesScheduleDto } from '../../../../../util/dto/create-request/create-lectures-schedule.dto';

export class UpdateLecturesScheduleDto extends PartialType(
  CreateLecturesScheduleDto,
) {}
