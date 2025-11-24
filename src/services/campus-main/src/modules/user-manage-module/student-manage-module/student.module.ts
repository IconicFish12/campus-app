import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { CampusUsersManageModule } from '../campusUsers-manage-module/campusUsers-manage.module';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Module({
  imports: [CampusUsersManageModule],
  controllers: [StudentController],
  providers: [StudentService, CampusDbService],
  exports: [StudentService],
})
export class StudentModule {}
