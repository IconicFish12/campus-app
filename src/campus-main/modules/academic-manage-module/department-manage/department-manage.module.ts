import { Module } from '@nestjs/common';
import { DepartmentManageService } from './department-manage.service';
import { DepartmentManageController } from './department-manage.controller';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Module({
  // imports: [CampusDbService],
  controllers: [DepartmentManageController],
  providers: [DepartmentManageService, CampusDbService],
  exports: [DepartmentManageService],
})
export class DepartmentManageModule {}
