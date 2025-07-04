import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { StudentModule } from './student-manage-module/student.module';
import { LecturersModule } from './hr-manage-module/lecturers-manage-module/lecturers.module';
import { EmployeeModule } from './hr-manage-module/employee-manage-module/employee.module';

@Module({
  imports: [UsersModule, StudentModule, LecturersModule, EmployeeModule],
  exports: [UsersModule, StudentModule, LecturersModule, EmployeeModule],
})
export class UserManageModule {}
