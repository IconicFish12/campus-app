import { Module } from '@nestjs/common';
import { UserManageModule } from './modules/user-manage-module/user-manage.module';
import { ReportManageModule } from './modules/report-manage-module/report-manage.module';
import { LearningModule } from './modules/learning-manage-module/learning.module';

@Module({
  providers: [UserManageModule, ReportManageModule, LearningModule],
})
export class LmsManageModule {}
