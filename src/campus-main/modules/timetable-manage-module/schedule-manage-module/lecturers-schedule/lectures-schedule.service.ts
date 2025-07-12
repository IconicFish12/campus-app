import { Injectable } from '@nestjs/common';
import { CreateLecturesScheduleDto } from './dto/create-lectures-schedule.dto';
import { UpdateLecturesScheduleDto } from './dto/update-lectures-schedule.dto';

@Injectable()
export class LecturesScheduleService {
  create(createLecturesScheduleDto: CreateLecturesScheduleDto) {
    return 'This action adds a new lecturesSchedule';
  }

  findAll() {
    return `This action returns all lecturesSchedule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lecturesSchedule`;
  }

  update(id: number, updateLecturesScheduleDto: UpdateLecturesScheduleDto) {
    return `This action updates a #${id} lecturesSchedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} lecturesSchedule`;
  }
}
