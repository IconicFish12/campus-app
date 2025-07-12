import { Module } from '@nestjs/common';
import { StateManageService } from './state-manage.service';
import { StateManageController } from './state-manage.controller';

@Module({
  controllers: [StateManageController],
  providers: [StateManageService],
})
export class StateManageModule {}
