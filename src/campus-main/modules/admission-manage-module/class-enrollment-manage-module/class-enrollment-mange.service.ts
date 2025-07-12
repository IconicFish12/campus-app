import { Injectable } from '@nestjs/common';
import { CreateClassEnrollmentManageDto } from './dto/create-class-enrollment-mange.dto';
import { UpdateClassEnrollmentManageDto } from './dto/update-class-enrollment-mange.dto';

@Injectable()
export class ClassEnrollmentManageService {
  create(createClassEnrollmentMangeDto: CreateClassEnrollmentManageDto) {
    return 'This action adds a new classEnrollmentMange';
  }

  findAll() {
    return `This action returns all classEnrollmentMange`;
  }

  findOne(id: number) {
    return `This action returns a #${id} classEnrollmentMange`;
  }

  update(
    id: number,
    updateClassEnrollmentMangeDto: UpdateClassEnrollmentManageDto,
  ) {
    return `This action updates a #${id} classEnrollmentMange`;
  }

  remove(id: number) {
    return `This action removes a #${id} classEnrollmentMange`;
  }
}
