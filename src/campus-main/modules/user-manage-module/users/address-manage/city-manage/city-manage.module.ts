import { Module } from '@nestjs/common';
import { CityManageService } from './city-manage.service';
import { CityManageController } from './city-manage.controller';

@Module({
  controllers: [CityManageController],
  providers: [CityManageService],
})
export class CityManageModule {}
