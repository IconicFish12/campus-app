import { Module } from '@nestjs/common';
import { AddressManageModule } from './address-manage/address-manage.module';
import { GeographicManageModule } from './geographic-manage-module/geographic-manage.module';
import { CampusDbModule } from 'src/common/Database/campus-db/campus-db.module';

@Module({
  imports: [AddressManageModule, GeographicManageModule, CampusDbModule],
  exports: [AddressManageModule, GeographicManageModule],
})
export class LocationManageModule {}
