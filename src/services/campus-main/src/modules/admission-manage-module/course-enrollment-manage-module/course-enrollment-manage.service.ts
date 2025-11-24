import { Injectable } from '@nestjs/common';
import { CreateCourseEnrollmentManageDto } from './dto/create-course-enrollment-manage.dto';
import { UpdateCourseEnrollmentManageDto } from './dto/update-course-enrollment-manage.dto';

@Injectable()
export class CourseEnrollmentManageService {
  create(createCourseEnrollmentManageDto: CreateCourseEnrollmentManageDto) {
    return 'This action adds a new courseEnrollmentManage';
  }

  findAll() {
    return `This action returns all courseEnrollmentManage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} courseEnrollmentManage`;
  }

  update(
    id: number,
    updateCourseEnrollmentManageDto: UpdateCourseEnrollmentManageDto,
  ) {
    return `This action updates a #${id} courseEnrollmentManage`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseEnrollmentManage`;
  }
}
