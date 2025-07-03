import { Module } from '@nestjs/common';
import { AcademyYearsService } from './academy-years.service';
import { AcademyYearsController } from './academy-years.controller';

@Module({
  controllers: [AcademyYearsController],
  providers: [AcademyYearsService],
})
export class AcademyYearsModule {}
