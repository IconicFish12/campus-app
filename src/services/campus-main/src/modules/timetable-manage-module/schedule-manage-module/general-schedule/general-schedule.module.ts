import { Module } from '@nestjs/common';
import { GeneralScheduleService } from './general-schedule.service';
import { GeneralScheduleController } from './general-schedule.controller';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Module({
  controllers: [GeneralScheduleController],
  providers: [GeneralScheduleService, CampusDbService],
  exports: [GeneralScheduleService],
})
export class GeneralScheduleModule {}
