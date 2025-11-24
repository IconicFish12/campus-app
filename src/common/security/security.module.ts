import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CampusUsersManageModule } from 'src/campus-main/modules/user-manage-module/campusUsers-manage-module/campusUsers-manage.module';

@Module({
  imports: [AuthModule, CampusUsersManageModule],
  exports: [],
})
export class SecurityModule {}
