import { PartialType } from '@nestjs/mapped-types';
import { CreateLecturesScheduleDto } from './create-lectures-schedule.dto';

export class UpdateLecturesScheduleDto extends PartialType(CreateLecturesScheduleDto) {}
