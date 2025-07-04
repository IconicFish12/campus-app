import { Module } from '@nestjs/common';
import { DepartmentManageModuleService } from './department-manage-module.service';
import { DepartmentManageModuleController } from './department-manage-module.controller';

@Module({
  controllers: [DepartmentManageModuleController],
  providers: [DepartmentManageModuleService],
  exports: [DepartmentManageModuleService],
})
export class DepartmentManageModuleModule {}
