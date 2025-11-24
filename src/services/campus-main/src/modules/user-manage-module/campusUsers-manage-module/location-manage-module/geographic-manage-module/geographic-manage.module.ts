import { Module } from '@nestjs/common';
import { CountryManageModule } from './country-manage/country-manage.module';
import { StateManageModule } from './country-state-manage/state-manage.module';
import { CityManageModule } from './city-manage/city-manage.module';
import { CampusDbModule } from 'src/common/Database/campus-db/campus-db.module';

@Module({
  imports: [
    CountryManageModule,
    StateManageModule,
    CityManageModule,
    CampusDbModule,
  ],
  exports: [CountryManageModule, StateManageModule, CityManageModule],
})
export class GeographicManageModule {}
