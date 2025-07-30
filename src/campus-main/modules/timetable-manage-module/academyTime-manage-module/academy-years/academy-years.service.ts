import { Injectable } from '@nestjs/common';
import { CreateAcademyYearDto } from '../../../../util/dto/create-request/create-academy-year.dto';
import { UpdateAcademyYearDto } from './dto/update-academy-year.dto';

@Injectable()
export class AcademyYearsService {
  create(createAcademyYearDto: CreateAcademyYearDto) {
    return 'This action adds a new academyYear';
  }

  findAll() {
    return `This action returns all academyYears`;
  }

  findOne(id: number) {
    return `This action returns a #${id} academyYear`;
  }

  update(id: number, updateAcademyYearDto: UpdateAcademyYearDto) {
    return `This action updates a #${id} academyYear`;
  }

  remove(id: number) {
    return `This action removes a #${id} academyYear`;
  }
}
