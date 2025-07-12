import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CourseEnrollmentManageService } from './course-enrollment-manage.service';
import { CreateCourseEnrollmentManageDto } from './dto/create-course-enrollment-manage.dto';
import { UpdateCourseEnrollmentManageDto } from './dto/update-course-enrollment-manage.dto';

@Controller()
export class CourseEnrollmentManageController {
  constructor(
    private readonly courseEnrollmentManageService: CourseEnrollmentManageService,
  ) {}

  @Post()
  create(
    @Body() createCourseEnrollmentManageDto: CreateCourseEnrollmentManageDto,
  ) {
    return this.courseEnrollmentManageService.create(
      createCourseEnrollmentManageDto,
    );
  }

  @Get()
  findAll() {
    return this.courseEnrollmentManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseEnrollmentManageService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCourseEnrollmentManageDto: UpdateCourseEnrollmentManageDto,
  ) {
    return this.courseEnrollmentManageService.update(
      +id,
      updateCourseEnrollmentManageDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseEnrollmentManageService.remove(+id);
  }
}
