import { Module } from '@nestjs/common';
import { CourseEnrollmentManageService } from './course-enrollment-manage.service';
import { CourseEnrollmentManageController } from './course-enrollment-manage.controller';

@Module({
  controllers: [CourseEnrollmentManageController],
  providers: [CourseEnrollmentManageService],
})
export class CourseEnrollmentManageModule {}
