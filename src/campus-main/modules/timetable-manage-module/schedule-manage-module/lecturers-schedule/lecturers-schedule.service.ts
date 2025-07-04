import { Injectable } from '@nestjs/common';
import { CreateLecturersScheduleDto } from './dto/create-lecturers-schedule.dto';
import { UpdateLecturersScheduleDto } from './dto/update-lecturers-schedule.dto';

@Injectable()
export class LecturersScheduleService {
  create(createLecturersScheduleDto: CreateLecturersScheduleDto) {
    return 'This action adds a new lecturersSchedule';
  }

  findAll() {
    return `This action returns all lecturersSchedule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lecturersSchedule`;
  }

  update(id: number, updateLecturersScheduleDto: UpdateLecturersScheduleDto) {
    return `This action updates a #${id} lecturersSchedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} lecturersSchedule`;
  }
}
