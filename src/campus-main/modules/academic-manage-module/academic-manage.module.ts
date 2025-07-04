import { Module } from '@nestjs/common';
import { DepartmentManageModuleModule } from './department-manage-module/department-manage-module.module';
import { ProgramManageModuleModule } from './programs-manage-module/program-manage-module.module';

@Module({
  imports: [DepartmentManageModuleModule, ProgramManageModuleModule],
  exports: [ProgramManageModuleModule],
})
export class AcademicManageModule {}
