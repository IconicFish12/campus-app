import { Module } from '@nestjs/common';
import { ClassEnrollmentManageController } from './class-enrollment-mange.controller';
import { ClassEnrollmentManageService } from './class-enrollment-mange.service';

@Module({
  controllers: [ClassEnrollmentManageController],
  providers: [ClassEnrollmentManageService],
})
export class ClassEnrollmentMangeModule {}
