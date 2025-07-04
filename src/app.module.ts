import { Module } from '@nestjs/common';
import { DatabaseModule } from './common/Database/database.module';
import { RouterModule } from '@nestjs/core';
import { CampusMainModule } from './campus-main/modules/campus-main.module';
import { LmsManageModule } from './campus-lms/modules/lms-manage.module';
import { UserManageModule } from './campus-main/modules/user-manage-module/user-manage.module';
import { UsersModule } from './campus-main/modules/user-manage-module/users/users.module';
import { HrManageModule } from './campus-main/modules/user-manage-module/hr-manage-module/hr-manage.module';
import { StudentModule } from './campus-main/modules/user-manage-module/student-manage-module/student.module';
import { TimeTableManageModule } from './campus-main/modules/timetable-manage-module/timetable-manage.module';
import { AcademyTimeManageModule } from './campus-main/modules/timetable-manage-module/academyTime-manage-module/academy-time-manage.module';
import { SemesterModule } from './campus-main/modules/timetable-manage-module/academyTime-manage-module/semester/semester.module';
import { CoursesModule } from './campus-main/modules/courses-manage-module/courses.module';
import { AttandanceModule } from './campus-main/modules/attandance-manage-module/attandance.module';
import { AdmissionModule } from './campus-main/modules/admission-manage-module/admission.module';
import { AcademicManageModule } from './campus-main/modules/academic-manage-module/academic-manage.module';
import { AddressManageModule } from './campus-main/modules/user-manage-module/users/address-manage/address-manage.module';
import { RolesManageModule } from './campus-main/modules/user-manage-module/users/roles-manage/roles-manage.module';
import { UsersRolesManageModule } from './campus-main/modules/user-manage-module/users/roles-manage/users-roles-manage/users-roles-manage.module';
import { EmployeeModule } from './campus-main/modules/user-manage-module/hr-manage-module/employee-manage-module/employee.module';
import { LecturersModule } from './campus-main/modules/user-manage-module/hr-manage-module/lecturers-manage-module/lecturers.module';
import { AcademyYearsModule } from './campus-main/modules/timetable-manage-module/academyTime-manage-module/academy-years/academy-years.module';
import { DepartmentManageModuleModule } from './campus-main/modules/academic-manage-module/department-manage-module/department-manage-module.module';
import { ProgramManageModuleModule } from './campus-main/modules/academic-manage-module/programs-manage-module/program-manage-module.module';

@Module({
  imports: [
    DatabaseModule,
    CampusMainModule,
    LmsManageModule,
    RouterModule.register([
      {
        path: 'campus-main',
        module: CampusMainModule,
        children: [
          {
            path: 'user-manage',
            module: UserManageModule,
            children: [
              {
                path: 'users',
                module: UsersModule,
                children: [
                  {
                    path: 'address-manage',
                    module: AddressManageModule,
                    children: [],
                  },
                  {
                    path: 'roles-manage',
                    module: RolesManageModule,
                    children: [
                      {
                        path: 'user-roles-manage',
                        module: UsersRolesManageModule,
                      },
                    ],
                  },
                ],
              },
              {
                path: 'hr-manage',
                module: HrManageModule,
                children: [
                  {
                    path: 'employee-manage',
                    module: EmployeeModule,
                  },
                  {
                    path: 'lecturers-manage',
                    module: LecturersModule,
                  },
                ],
              },
              {
                path: 'student-manage',
                module: StudentModule,
              },
            ],
          },
          {
            path: 'timetable-manage',
            module: TimeTableManageModule,
            children: [
              {
                path: 'academy-time-manage',
                module: AcademyTimeManageModule,
                children: [
                  {
                    path: 'acadmey-years-manage',
                    module: AcademyYearsModule,
                  },
                  {
                    path: 'semester-manage',
                    module: SemesterModule,
                  },
                ],
              },
              {
                path: 'semester-manage',
                module: SemesterModule,
              },
            ],
          },
          {
            path: 'academic-manage',
            module: AcademicManageModule,
            children: [
              {
                path: 'department-manage',
                module: DepartmentManageModuleModule,
              },
              {
                path: 'programs-manage',
                module: ProgramManageModuleModule,
              },
            ],
          },
          {
            path: 'courses-manage',
            module: CoursesModule,
          },
          {
            path: 'attandance-manage',
            module: AttandanceModule,
          },
          {
            path: 'admission-manage',
            module: AdmissionModule,
          },
        ],
      },
      {
        path: 'campus-lms',
        module: LmsManageModule,
        children: [],
      },
    ]),
  ],
})
export class AppModule {}
