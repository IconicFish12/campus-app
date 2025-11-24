import { Module } from '@nestjs/common';
import { ClassScheduleService } from './class-schedule.service';
import { ClassScheduleController } from './class-schedule.controller';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Module({
  controllers: [ClassScheduleController],
  providers: [ClassScheduleService, CampusDbService],
  exports: [ClassScheduleService],
})
export class ClassScheduleModule {}
