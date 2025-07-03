import { Module } from '@nestjs/common';
import { GeneralScheduleService } from './general-schedule.service';
import { GeneralScheduleController } from './general-schedule.controller';

@Module({
  controllers: [GeneralScheduleController],
  providers: [GeneralScheduleService],
})
export class GeneralScheduleModule {}
