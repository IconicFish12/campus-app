import { Module } from '@nestjs/common';
import { AddressManageService } from './address-manage.service';
import { AddressManageController } from './address-manage.controller';
import { CountryManageModule } from './country-manage/country-manage.module';
import { StateManageModule } from './country-state-manage/state-manage.module';
import { CityManageModule } from './city-manage/city-manage.module';

@Module({
  controllers: [AddressManageController],
  providers: [AddressManageService],
  exports: [AddressManageService],
  imports: [CountryManageModule, StateManageModule, CityManageModule],
})
export class AddressManageModule {}
