import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee-manage-module/employee.module';
import { LecturersModule } from './lecturers-manage-module/lecturers.module';

@Module({
  imports: [EmployeeModule, LecturersModule],
})
export class HrManageModule {}
