import { Module } from '@nestjs/common';
import { CountryStateManageService } from './country-state-manage.service';
import { CountryStateManageController } from './country-state-manage.controller';

@Module({
  controllers: [CountryStateManageController],
  providers: [CountryStateManageService],
})
export class CountryStateManageModule {}
