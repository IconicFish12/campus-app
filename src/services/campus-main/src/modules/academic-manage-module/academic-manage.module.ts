import { Module } from '@nestjs/common';
import { DepartmentManageModule } from './department-manage/department-manage.module';
import { ProgramManageModule } from './programs-manage/program-manage.module';
import { CampusDbModule } from 'src/common/Database/campus-db/campus-db.module';
import { ValidatorsModule } from 'src/common/pipes/validators/validators.module';

@Module({
  imports: [
    DepartmentManageModule,
    ProgramManageModule,
    CampusDbModule,
    ValidatorsModule,
  ],
  exports: [DepartmentManageModule, ProgramManageModule],
})
export class AcademicManageModule {}
