import { Module } from '@nestjs/common';
import { SemesterService } from './semester.service';
import { SemesterController } from './semester.controller';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Module({
  controllers: [SemesterController],
  providers: [SemesterService, CampusDbService],
  exports: [SemesterService],
})
export class SemesterModule {}
