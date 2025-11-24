import { Module } from '@nestjs/common';
import { CityManageService } from './city-manage.service';
import { CityManageController } from './city-manage.controller';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Module({
  controllers: [CityManageController],
  providers: [CityManageService, CampusDbService],
  exports: [CityManageService],
})
export class CityManageModule {}
