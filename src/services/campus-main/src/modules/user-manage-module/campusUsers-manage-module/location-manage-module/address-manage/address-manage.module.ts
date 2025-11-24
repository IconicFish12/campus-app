import { Module } from '@nestjs/common';
import { AddressManageService } from './address-manage.service';
import { AddressManageController } from './address-manage.controller';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';
import { GeographicManageModule } from '../geographic-manage-module/geographic-manage.module';

@Module({
  imports: [GeographicManageModule],
  controllers: [AddressManageController],
  providers: [AddressManageService, CampusDbService],
  exports: [AddressManageService, GeographicManageModule],
})
export class AddressManageModule {}
