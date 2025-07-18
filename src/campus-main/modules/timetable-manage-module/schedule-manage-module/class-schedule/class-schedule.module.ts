import { Module } from '@nestjs/common';
import { ClassScheduleService } from './class-schedule.service';
import { ClassScheduleController } from './class-schedule.controller';

@Module({
  controllers: [ClassScheduleController],
  providers: [ClassScheduleService],
  exports: [ClassScheduleService],
})
export class ClassScheduleModule {}
