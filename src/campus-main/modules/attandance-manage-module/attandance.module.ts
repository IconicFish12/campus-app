import { Module } from '@nestjs/common';
import { AttandanceService } from './attandance.service';
import { AttandanceController } from './attandance.controller';

@Module({
  controllers: [AttandanceController],
  providers: [AttandanceService],
})
export class AttandanceModule {}
