import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentEnrollmentManageService } from './student-enrollment-manage.service';
import { CreateStudentEnrollmentManageDto } from './dto/create-student-enrollment-manage.dto';
import { UpdateStudentEnrollmentManageDto } from './dto/update-student-enrollment-manage.dto';

@Controller()
export class StudentEnrollmentManageController {
  constructor(
    private readonly studentEnrollmentManageService: StudentEnrollmentManageService,
  ) {}

  @Post()
  create(
    @Body() createStudentEnrollmentManageDto: CreateStudentEnrollmentManageDto,
  ) {
    return this.studentEnrollmentManageService.create(
      createStudentEnrollmentManageDto,
    );
  }

  @Get()
  findAll() {
    return this.studentEnrollmentManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentEnrollmentManageService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStudentEnrollmentManageDto: UpdateStudentEnrollmentManageDto,
  ) {
    return this.studentEnrollmentManageService.update(
      +id,
      updateStudentEnrollmentManageDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentEnrollmentManageService.remove(+id);
  }
}
