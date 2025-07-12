import { Module } from '@nestjs/common';
import { DepartmentManageModule } from './department-manage/department-manage.module';
import { ProgramManageModule } from './programs-manage/program-manage.module';
import { CampusDbModule } from 'src/common/Database/campus-db/campus-db.module';

@Module({
  imports: [DepartmentManageModule, ProgramManageModule, CampusDbModule],
  exports: [DepartmentManageModule, ProgramManageModule],
})
export class AcademicManageModule {}
