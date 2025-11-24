import { Module } from '@nestjs/common';
import { UserManageModule } from './user-manage-module/user-manage.module';
import { TimeTableManageModule } from './timetable-manage-module/timetable-manage.module';
import { CoursesModule } from './courses-manage-module/courses.module';
import { AttandanceModule } from './attandance-manage-module/attandance.module';
import { AdmissionModule } from './admission-manage-module/admission.module';
import { DatabaseModule } from 'src/common/Database/database.module';
import { AcademicManageModule } from './academic-manage-module/academic-manage.module';

@Module({
  imports: [
    DatabaseModule,
    AcademicManageModule,
    UserManageModule,
    TimeTableManageModule,
    CoursesModule,
    AttandanceModule,
    AdmissionModule,
  ],
  exports: [
    UserManageModule,
    TimeTableManageModule,
    AcademicManageModule,
    CoursesModule,
    AttandanceModule,
    AdmissionModule,
  ],
})
export class CampusMainModule {}
