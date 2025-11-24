import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from '../../../util/dto/create-request/create-student.dto';
import { UpdateStudentDto } from '../../../util/dto/update-request/update-student.dto';

@Injectable()
export class StudentService {
  create(createRequest: CreateStudentDto) {
    return 'This action adds a new student';
  }

  findAll() {
    return `This action returns all student`;
  }

  findOne(id: string) {
    return `This action returns a #${id} student`;
  }

  update(id: string, updateRequest: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: string) {
    return `This action removes a #${id} student`;
  }
}
