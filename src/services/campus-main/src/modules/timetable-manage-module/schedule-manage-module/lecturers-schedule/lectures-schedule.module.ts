import { Module } from '@nestjs/common';
import { LecturesScheduleService } from './lectures-schedule.service';
import { LecturesScheduleController } from './lectures-schedule.controller';

@Module({
  controllers: [LecturesScheduleController],
  providers: [LecturesScheduleService],
})
export class LecturesScheduleModule {}
