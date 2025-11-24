import { Module } from '@nestjs/common';
import { UsersRolesManageService } from './users-roles-manage.service';
import { UsersRolesManageController } from './users-roles-manage.controller';

@Module({
  controllers: [UsersRolesManageController],
  providers: [UsersRolesManageService],
})
export class UsersRolesManageModule {}
