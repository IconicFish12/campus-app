import { Injectable } from '@nestjs/common';
import { CreateGeneralScheduleDto } from './dto/create-general-schedule.dto';
import { UpdateGeneralScheduleDto } from './dto/update-general-schedule.dto';

@Injectable()
export class GeneralScheduleService {
  create(createGeneralScheduleDto: CreateGeneralScheduleDto) {
    return 'This action adds a new generalSchedule';
  }

  findAll() {
    return `This action returns all generalSchedule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} generalSchedule`;
  }

  update(id: number, updateGeneralScheduleDto: UpdateGeneralScheduleDto) {
    return `This action updates a #${id} generalSchedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} generalSchedule`;
  }
}
