import { Module } from '@nestjs/common';
import { LecturesScheduleService } from './lectures-schedule.service';
import { LecturesScheduleController } from './lectures-schedule.controller';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Module({
  controllers: [LecturesScheduleController],
  providers: [LecturesScheduleService, CampusDbService],
  exports: [LecturesScheduleService],
})
export class LecturesScheduleModule {}
