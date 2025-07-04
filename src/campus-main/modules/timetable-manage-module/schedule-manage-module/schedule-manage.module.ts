import { Module } from '@nestjs/common';
import { ClassScheduleModule } from './class-schedule/class-schedule.module';
import { GeneralScheduleModule } from './general-schedule/general-schedule.module';
import { LecturersScheduleModule } from './lecturers-schedule/lecturers-schedule.module';

@Module({
  imports: [
    ClassScheduleModule,
    GeneralScheduleModule,
    LecturersScheduleModule,
  ],
  exports: [
    ClassScheduleModule,
    GeneralScheduleModule,
    LecturersScheduleModule,
  ],
})
export class ScheduleManageModule {}
