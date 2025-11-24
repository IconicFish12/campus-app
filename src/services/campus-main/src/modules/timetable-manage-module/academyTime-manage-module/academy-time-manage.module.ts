import { Module } from '@nestjs/common';
import { AcademyYearsModule } from './academy-years/academy-years.module';
import { SemesterModule } from './semester/semester.module';
import { CampusDbModule } from 'src/common/Database/campus-db/campus-db.module';

@Module({
  imports: [AcademyYearsModule, SemesterModule, CampusDbModule],
  exports: [AcademyYearsModule, SemesterModule],
})
export class AcademyTimeManageModule {}
