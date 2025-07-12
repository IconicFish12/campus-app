import { Module } from '@nestjs/common';
import { CampusUsersManageService } from './campusUsers-manage.service';
import { CampusUsersManageController } from './campusUsers-manage.controller';
import { RolesManageModule } from './roles-manage/roles-manage.module';
import { AddressManageModule } from './address-manage/address-manage.module';

@Module({
  controllers: [CampusUsersManageController],
  providers: [CampusUsersManageService],
  imports: [RolesManageModule, AddressManageModule],
  exports: [CampusUsersManageService],
})
export class CampusUsersManageModule {}
