import { Injectable } from '@nestjs/common';
import { CreateLecturerDto } from '../../../../util/dto/create-request/create-lecturer.dto';
import { UpdateLecturerDto } from './dto/update-lecturer.dto';

@Injectable()
export class LecturersService {
  create(createLecturerDto: CreateLecturerDto) {
    return 'This action adds a new lecturer';
  }

  findAll() {
    return `This action returns all lecturers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lecturer`;
  }

  update(id: number, updateLecturerDto: UpdateLecturerDto) {
    return `This action updates a #${id} lecturer`;
  }

  remove(id: number) {
    return `This action removes a #${id} lecturer`;
  }
}
