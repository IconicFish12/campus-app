import { PartialType } from '@nestjs/mapped-types';
import { CreateLecturersScheduleDto } from './create-lecturers-schedule.dto';

export class UpdateLecturersScheduleDto extends PartialType(CreateLecturersScheduleDto) {}
