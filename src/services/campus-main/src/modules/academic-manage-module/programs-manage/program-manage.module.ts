import { Module } from '@nestjs/common';
import { ProgramManageService } from './program-manage.service';
import { ProgramManageController } from './program-manage.controller';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Module({
  controllers: [ProgramManageController],
  providers: [ProgramManageService, CampusDbService],
  exports: [ProgramManageService],
})
export class ProgramManageModule {}
