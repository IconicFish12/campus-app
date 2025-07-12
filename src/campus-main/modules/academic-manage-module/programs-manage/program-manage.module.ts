import { Module } from '@nestjs/common';
import { ProgramManageService } from './program-manage.service';
import { ProgramManageController } from './program-manage.controller';

@Module({
  controllers: [ProgramManageController],
  providers: [ProgramManageService],
  exports: [ProgramManageService],
})
export class ProgramManageModule {}
