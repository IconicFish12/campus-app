import { Module } from '@nestjs/common';
import { ClassScheduleModule } from './class-schedule/class-schedule.module';
import { GeneralScheduleModule } from './general-schedule/general-schedule.module';
import { LecturesScheduleModule } from './lecturers-schedule/lectures-schedule.module';
import { CampusDbModule } from 'src/common/Database/campus-db/campus-db.module';

@Module({
  imports: [
    ClassScheduleModule,
    GeneralScheduleModule,
    LecturesScheduleModule,
    CampusDbModule,
  ],
  exports: [ClassScheduleModule, GeneralScheduleModule, LecturesScheduleModule],
})
export class ScheduleManageModule {}
