import { Module } from '@nestjs/common';
import { CampusUsersManageService } from './campusUsers-manage.service';
import { CampusUsersManageController } from './campusUsers-manage.controller';
import { RolesManageModule } from './roles-manage/roles-manage.module';
import { AddressManageModule } from './address-manage/address-manage.module';
import { CampusDbModule } from 'src/common/Database/campus-db/campus-db.module';

@Module({
  imports: [RolesManageModule, AddressManageModule, CampusDbModule],
  controllers: [CampusUsersManageController],
  providers: [CampusUsersManageService],
  exports: [CampusUsersManageService],
})
export class CampusUsersManageModule {}
