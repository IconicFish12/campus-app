import { Module } from '@nestjs/common';
import { ProgramManageModuleService } from './program-manage-module.service';
import { ProgramManageModuleController } from './program-manage-module.controller';

@Module({
  controllers: [ProgramManageModuleController],
  providers: [ProgramManageModuleService],
  exports: [ProgramManageModuleService],
})
export class ProgramManageModuleModule {}
