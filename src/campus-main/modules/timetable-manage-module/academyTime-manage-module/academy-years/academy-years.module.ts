import { Module } from '@nestjs/common';
import { AcademyYearsService } from './academy-years.service';
import { AcademyYearsController } from './academy-years.controller';

@Module({
  controllers: [AcademyYearsController],
  providers: [AcademyYearsService],
  exports: [AcademyYearsService],
})
export class AcademyYearsModule {}
