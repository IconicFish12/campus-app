import { Module } from '@nestjs/common';
import { AdmissionService } from './admission.service';
import { AdmissionController } from './admission.controller';
import { ClassEnrollmentMangeModule } from './class-enrollment-manage-module/class-enrollment-mange.module';
import { CourseEnrollmentManageModule } from './course-enrollment-manage-module/course-enrollment-manage.module';
import { StudentEnrollmentManageModule } from './student-enrollment-manage-module/student-enrollment-manage.module';

@Module({
  imports: [
    ClassEnrollmentMangeModule,
    CourseEnrollmentManageModule,
    StudentEnrollmentManageModule,
  ],
  controllers: [AdmissionController],
  providers: [AdmissionService],
  exports: [
    AdmissionService,
    ClassEnrollmentMangeModule,
    CourseEnrollmentManageModule,
    StudentEnrollmentManageModule,
  ],
})
export class AdmissionModule {}
