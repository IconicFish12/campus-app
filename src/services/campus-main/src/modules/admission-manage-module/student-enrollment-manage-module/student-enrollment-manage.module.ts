import { Module } from '@nestjs/common';
import { StudentEnrollmentManageService } from './student-enrollment-manage.service';
import { StudentEnrollmentManageController } from './student-enrollment-manage.controller';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Module({
  controllers: [StudentEnrollmentManageController],
  providers: [StudentEnrollmentManageService, CampusDbService],
  exports: [StudentEnrollmentManageService],
})
export class StudentEnrollmentManageModule {}
