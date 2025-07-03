import { Module } from '@nestjs/common';
import { LecturersScheduleService } from './lecturers-schedule.service';
import { LecturersScheduleController } from './lecturers-schedule.controller';

@Module({
  controllers: [LecturersScheduleController],
  providers: [LecturersScheduleService],
})
export class LecturersScheduleModule {}
