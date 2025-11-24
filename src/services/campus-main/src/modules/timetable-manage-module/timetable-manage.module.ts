import { Module } from '@nestjs/common';
import { AcademyTimeManageModule } from './academyTime-manage-module/academy-time-manage.module';
import { ScheduleManageModule } from './schedule-manage-module/schedule-manage.module';

@Module({
  imports: [AcademyTimeManageModule, ScheduleManageModule],
  exports: [AcademyTimeManageModule, ScheduleManageModule],
})
export class TimeTableManageModule {}
