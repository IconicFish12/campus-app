import { Module } from '@nestjs/common';
import { StudentModule } from './student-manage-module/student.module';
import { LecturersModule } from './hr-manage-module/lecturers-manage-module/lecturers.module';
import { EmployeeModule } from './hr-manage-module/employee-manage-module/employee.module';
import { CampusUsersManageModule } from './campusUsers-manage-module/campusUsers-manage.module';

@Module({
  imports: [
    CampusUsersManageModule,
    StudentModule,
    LecturersModule,
    EmployeeModule,
  ],
  exports: [
    CampusUsersManageModule,
    StudentModule,
    LecturersModule,
    EmployeeModule,
  ],
})
export class UserManageModule {}
