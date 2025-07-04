import { Module } from '@nestjs/common';
import { AddressManageService } from './address-manage.service';
import { AddressManageController } from './address-manage.controller';
import { CountryManageModule } from './country-manage/country-manage.module';
import { CountryStateManageModule } from './country-state-manage/country-state-manage.module';
import { CityManageModule } from './city-manage/city-manage.module';

@Module({
  controllers: [AddressManageController],
  providers: [AddressManageService],
  exports: [AddressManageService],
  imports: [CountryManageModule, CountryStateManageModule, CityManageModule],
})
export class AddressManageModule {}
