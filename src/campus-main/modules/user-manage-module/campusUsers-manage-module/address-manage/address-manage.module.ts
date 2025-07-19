import { Module } from '@nestjs/common';
import { AddressManageService } from './address-manage.service';
import { AddressManageController } from './address-manage.controller';
import { CountryManageModule } from './country-manage/country-manage.module';
import { StateManageModule } from './country-state-manage/state-manage.module';
import { CityManageModule } from './city-manage/city-manage.module';
import { CampusDbModule } from 'src/common/Database/campus-db/campus-db.module';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Module({
  imports: [
    CountryManageModule,
    StateManageModule,
    CityManageModule,
    CampusDbModule,
  ],
  controllers: [AddressManageController],
  providers: [AddressManageService, CampusDbService],
  exports: [
    AddressManageService,
    CountryManageModule,
    StateManageModule,
    CityManageModule,
  ],
})
export class AddressManageModule {}
