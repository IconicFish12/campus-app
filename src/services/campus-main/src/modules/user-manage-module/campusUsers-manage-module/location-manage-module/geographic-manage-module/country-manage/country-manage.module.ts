import { Module } from '@nestjs/common';
import { CountryManageService } from './country-manage.service';
import { CountryManageController } from './country-manage.controller';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Module({
  controllers: [CountryManageController],
  providers: [CountryManageService, CampusDbService],
})
export class CountryManageModule {}
