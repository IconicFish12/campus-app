import { Module } from '@nestjs/common';
import { CampusUsersManageService } from './campusUsers-manage.service';
import { CampusUsersManageController } from './campusUsers-manage.controller';
import { RolesManageModule } from './roles-manage/roles-manage.module';
import { CampusDbModule } from 'src/common/Database/campus-db/campus-db.module';
import { LocationManageModule } from './location-manage-module/location-manage.module';

@Module({
  imports: [RolesManageModule, LocationManageModule, CampusDbModule],
  controllers: [CampusUsersManageController],
  providers: [CampusUsersManageService],
  exports: [CampusUsersManageService],
})
export class CampusUsersManageModule {}
