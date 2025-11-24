import { Module } from '@nestjs/common';
import { DatabaseModule } from './common/Database/database.module';
import { RouterModule } from '@nestjs/core';
import { CampusMainModule } from './campus-main/modules/campus-main.module';
import { LmsManageModule } from './campus-lms/modules/lms-manage.module';
import { CampusUsersManageModule } from './campus-main/modules/user-manage-module/campusUsers-manage-module/campusUsers-manage.module';
import { RolesManageModule } from './campus-main/modules/user-manage-module/campusUsers-manage-module/roles-manage/roles-manage.module';
import { UsersRolesManageModule } from './campus-main/modules/user-manage-module/campusUsers-manage-module/roles-manage/users-roles-manage/users-roles-manage.module';
import { HrManageModule } from './campus-main/modules/user-manage-module/hr-manage-module/hr-manage.module';
import { EmployeeModule } from './campus-main/modules/user-manage-module/hr-manage-module/employee-manage-module/employee.module';
import { LecturersModule } from './campus-main/modules/user-manage-module/hr-manage-module/lecturers-manage-module/lecturers.module';
import { StudentModule } from './campus-main/modules/user-manage-module/student-manage-module/student.module';
import { TimeTableManageModule } from './campus-main/modules/timetable-manage-module/timetable-manage.module';
import { AcademyTimeManageModule } from './campus-main/modules/timetable-manage-module/academyTime-manage-module/academy-time-manage.module';
import { AcademyYearsModule } from './campus-main/modules/timetable-manage-module/academyTime-manage-module/academy-years/academy-years.module';
import { SemesterModule } from './campus-main/modules/timetable-manage-module/academyTime-manage-module/semester/semester.module';
import { AcademicManageModule } from './campus-main/modules/academic-manage-module/academic-manage.module';
import { DepartmentManageModule } from './campus-main/modules/academic-manage-module/department-manage/department-manage.module';
import { ProgramManageModule } from './campus-main/modules/academic-manage-module/programs-manage/program-manage.module';
import { AdmissionModule } from './campus-main/modules/admission-manage-module/admission.module';
import { AttandanceModule } from './campus-main/modules/attandance-manage-module/attandance.module';
import { CoursesModule } from './campus-main/modules/courses-manage-module/courses.module';
import { ConfigModule } from '@nestjs/config';
import { ScheduleManageModule } from './campus-main/modules/timetable-manage-module/schedule-manage-module/schedule-manage.module';
import { ClassScheduleModule } from './campus-main/modules/timetable-manage-module/schedule-manage-module/class-schedule/class-schedule.module';
import { LecturesScheduleModule } from './campus-main/modules/timetable-manage-module/schedule-manage-module/lecturers-schedule/lectures-schedule.module';
import { GeneralScheduleModule } from './campus-main/modules/timetable-manage-module/schedule-manage-module/general-schedule/general-schedule.module';
import { LocationManageModule } from './campus-main/modules/user-manage-module/campusUsers-manage-module/location-manage-module/location-manage.module';
import { AddressManageModule } from './campus-main/modules/user-manage-module/campusUsers-manage-module/location-manage-module/address-manage/address-manage.module';
import { GeographicManageModule } from './campus-main/modules/user-manage-module/campusUsers-manage-module/location-manage-module/geographic-manage-module/geographic-manage.module';
import { CountryManageModule } from './campus-main/modules/user-manage-module/campusUsers-manage-module/location-manage-module/geographic-manage-module/country-manage/country-manage.module';
import { StateManageModule } from './campus-main/modules/user-manage-module/campusUsers-manage-module/location-manage-module/geographic-manage-module/country-state-manage/state-manage.module';
import { CityManageModule } from './campus-main/modules/user-manage-module/campusUsers-manage-module/location-manage-module/geographic-manage-module/city-manage/city-manage.module';
import { UserManageModule } from './campus-main/modules/user-manage-module/user-manage.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DatabaseModule,
    CampusMainModule,
    LmsManageModule,
    RouterModule.register([
      {
        path: 'campus-main',
        module: CampusMainModule,
        children: [
          {
            path: 'users-manage',
            module: UserManageModule,
            children: [
              {
                path: 'locations',
                module: LocationManageModule,
                children: [
                  {
                    path: 'addresses',
                    module: AddressManageModule,
                  },
                  {
                    path: 'geographics',
                    module: GeographicManageModule,
                    children: [
                      { path: 'countries', module: CountryManageModule },
                      { path: 'states', module: StateManageModule },
                      { path: 'cities', module: CityManageModule },
                    ],
                  },
                ],
              },
              {
                path: 'roles',
                module: RolesManageModule,
                children: [
                  { path: 'user-assignments', module: UsersRolesManageModule },
                ],
              },
              {
                path: 'campus-users',
                module: CampusUsersManageModule,
              },
            ],
          },
          {
            path: 'hr-manage',
            module: HrManageModule,
            children: [
              { path: 'employees', module: EmployeeModule },
              { path: 'lecturers', module: LecturersModule },
            ],
          },
          {
            path: 'students-manage',
            module: StudentModule,
          },
          {
            path: 'timetables-manage',
            module: TimeTableManageModule,
            children: [
              {
                path: 'academic-periods',
                module: AcademyTimeManageModule,
                children: [
                  { path: 'years', module: AcademyYearsModule },
                  { path: 'semesters', module: SemesterModule },
                ],
              },
              {
                path: 'schedules-manage',
                module: ScheduleManageModule,
                children: [
                  { path: 'class-schedules', module: ClassScheduleModule },
                  {
                    path: 'lecturers-schedules',
                    module: LecturesScheduleModule,
                  },
                  {
                    path: 'general-schedules',
                    module: GeneralScheduleModule,
                  },
                ],
              },
            ],
          },
          {
            path: 'academics-manage',
            module: AcademicManageModule,
            children: [
              { path: 'departments', module: DepartmentManageModule },
              { path: 'programs', module: ProgramManageModule },
            ],
          },
          { path: 'courses', module: CoursesModule },
          { path: 'attendance', module: AttandanceModule },
          {
            path: 'admission-manage',
            module: AdmissionModule,
            children: [],
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
