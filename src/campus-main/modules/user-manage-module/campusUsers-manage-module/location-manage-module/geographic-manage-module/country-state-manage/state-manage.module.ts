import { Module } from '@nestjs/common';
import { StateManageService } from './state-manage.service';
import { StateManageController } from './state-manage.controller';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Module({
  controllers: [StateManageController],
  providers: [StateManageService, CampusDbService],
  exports: [StateManageService],
})
export class StateManageModule {}
