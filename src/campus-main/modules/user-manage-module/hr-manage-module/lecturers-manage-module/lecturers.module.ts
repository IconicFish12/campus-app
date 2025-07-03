import { Module } from '@nestjs/common';
import { LecturersService } from './lecturers.service';
import { LecturersController } from './lecturers.controller';

@Module({
  controllers: [LecturersController],
  providers: [LecturersService],
})
export class LecturersModule {}
