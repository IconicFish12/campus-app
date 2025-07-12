import { Module } from '@nestjs/common';
import { CountryManageService } from './country-manage.service';
import { CountryManageController } from './country-manage.controller';

@Module({
  controllers: [CountryManageController],
  providers: [CountryManageService],
})
export class CountryManageModule {}
