import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { CampusDbModule } from 'src/common/Database/campus-db/campus-db.module';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Module({
  imports: [CampusDbModule],
  controllers: [CoursesController],
  providers: [CoursesService, CampusDbService],
  exports: [CoursesService],
})
export class CoursesModule {}
