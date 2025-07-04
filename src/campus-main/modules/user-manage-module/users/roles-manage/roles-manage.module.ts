import { Module } from '@nestjs/common';
import { RolesManageService } from './roles-manage.service';
import { RolesManageController } from './roles-manage.controller';
import { UsersRolesManageModule } from './users-roles-manage/users-roles-manage.module';

@Module({
  controllers: [RolesManageController],
  providers: [RolesManageService],
  exports: [RolesManageService],
  imports: [UsersRolesManageModule],
})
export class RolesManageModule {}
