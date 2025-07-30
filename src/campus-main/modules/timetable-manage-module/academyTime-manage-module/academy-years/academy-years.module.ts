import { Module } from '@nestjs/common';
import { AcademyYearsService } from './academy-years.service';
import { AcademyYearsController } from './academy-years.controller';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Module({
  controllers: [AcademyYearsController],
  providers: [AcademyYearsService, CampusDbService],
  exports: [AcademyYearsService],
})
export class AcademyYearsModule {}
