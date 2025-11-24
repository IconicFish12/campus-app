import { Module } from '@nestjs/common';
import { AcademyTimeManageModule } from './academyTime-manage-module/academy-time-manage.module';
import { ScheduleManageModule } from './schedule-manage-module/schedule-manage.module';
import { CampusDbModule } from 'src/common/Database/campus-db/campus-db.module';

@Module({
  imports: [AcademyTimeManageModule, ScheduleManageModule, CampusDbModule],
  exports: [AcademyTimeManageModule, ScheduleManageModule],
})
export class TimeTableManageModule {}
