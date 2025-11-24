import { Injectable } from '@nestjs/common';
import { CreateStudentEnrollmentManageDto } from './dto/create-student-enrollment-manage.dto';
import { UpdateStudentEnrollmentManageDto } from './dto/update-student-enrollment-manage.dto';

@Injectable()
export class StudentEnrollmentManageService {
  create(createStudentEnrollmentManageDto: CreateStudentEnrollmentManageDto) {
    return 'This action adds a new studentEnrollmentManage';
  }

  findAll() {
    return `This action returns all studentEnrollmentManage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentEnrollmentManage`;
  }

  update(
    id: number,
    updateStudentEnrollmentManageDto: UpdateStudentEnrollmentManageDto,
  ) {
    return `This action updates a #${id} studentEnrollmentManage`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentEnrollmentManage`;
  }
}
