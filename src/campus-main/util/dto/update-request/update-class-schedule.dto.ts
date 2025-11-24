import { PartialType } from '@nestjs/mapped-types';
import { CreateClassScheduleDto } from '../../../util/dto/create-request/create-class-schedule.dto';

export class UpdateClassScheduleDto extends PartialType(
  CreateClassScheduleDto,
) {}
