import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LecturesScheduleService } from './lectures-schedule.service';
import { CreateLecturesScheduleDto } from '../../../../util/dto/create-request/create-lectures-schedule.dto';
import { UpdateLecturesScheduleDto } from '../../../../util/dto/update-request/update-lectures-schedule.dto';

@Controller()
export class LecturesScheduleController {
  constructor(
    private readonly lecturesScheduleService: LecturesScheduleService,
  ) {}

  @Post()
  create(@Body() createLecturesScheduleDto: CreateLecturesScheduleDto) {
    return this.lecturesScheduleService.create(createLecturesScheduleDto);
  }

  @Get()
  findAll() {
    return this.lecturesScheduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lecturesScheduleService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLecturesScheduleDto: UpdateLecturesScheduleDto,
  ) {
    return this.lecturesScheduleService.update(+id, updateLecturesScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lecturesScheduleService.remove(+id);
  }
}
