import { Module } from '@nestjs/common';
import { CourseEnrollmentManageService } from './course-enrollment-manage.service';
import { CourseEnrollmentManageController } from './course-enrollment-manage.controller';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Module({
  controllers: [CourseEnrollmentManageController],
  providers: [CourseEnrollmentManageService, CampusDbService],
  exports: [CourseEnrollmentManageService],
})
export class CourseEnrollmentManageModule {}
