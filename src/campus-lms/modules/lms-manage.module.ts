import { Module } from '@nestjs/common';
import { UserManageModule } from './user-manage-module/user-manage.module';
import { ReportManageModule } from './report-manage-module/report-manage.module';
import { LearningModule } from './learning-manage-module/learning.module';

@Module({
  imports: [UserManageModule, ReportManageModule, LearningModule],
  exports: [],
})
export class LmsManageModule {}
