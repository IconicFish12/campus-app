import { Module } from '@nestjs/common';
import { AcademyYearsModule } from './academy-years/academy-years.module';
import { SemesterModule } from './semester/semester.module';

@Module({
  imports: [AcademyYearsModule, SemesterModule],
  exports: [AcademyYearsModule, SemesterModule],
})
export class AcademyTimeManageModule {}
