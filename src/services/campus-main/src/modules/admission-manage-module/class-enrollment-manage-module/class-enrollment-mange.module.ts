import { Module } from '@nestjs/common';
import { ClassEnrollmentManageController } from './class-enrollment-mange.controller';
import { ClassEnrollmentManageService } from './class-enrollment-mange.service';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Module({
  controllers: [ClassEnrollmentManageController],
  providers: [ClassEnrollmentManageService, CampusDbService],
  exports: [ClassEnrollmentManageService],
})
export class ClassEnrollmentMangeModule {}
