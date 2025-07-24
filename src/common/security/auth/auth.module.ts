import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CampusUsersManageModule } from 'src/campus-main/modules/user-manage-module/campusUsers-manage-module/campusUsers-manage.module';
import { CampusUsersManageService } from 'src/campus-main/modules/user-manage-module/campusUsers-manage-module/campusUsers-manage.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    CampusUsersManageModule,
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, CampusUsersManageService],
})
export class AuthModule {}
