import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { RolesManageModule } from './roles-manage/roles-manage.module';
import { AddressManageModule } from './address-manage/address-manage.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [RolesManageModule, AddressManageModule],
  exports: [UsersService],
})
export class UsersModule {}
