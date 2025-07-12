import { Module } from '@nestjs/common';
import { StudentEnrollmentManageService } from './student-enrollment-manage.service';
import { StudentEnrollmentManageController } from './student-enrollment-manage.controller';

@Module({
  controllers: [StudentEnrollmentManageController],
  providers: [StudentEnrollmentManageService],
})
export class StudentEnrollmentManageModule {}
