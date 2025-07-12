import { Module } from '@nestjs/common';
import { DepartmentManageService } from './department-manage.service';
import { DepartmentManageController } from './department-manage.controller';

@Module({
  controllers: [DepartmentManageController],
  providers: [DepartmentManageService],
  exports: [DepartmentManageService],
})
export class DepartmentManageModule {}
