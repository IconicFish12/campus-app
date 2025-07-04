import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LecturersScheduleService } from './lecturers-schedule.service';
import { CreateLecturersScheduleDto } from './dto/create-lecturers-schedule.dto';
import { UpdateLecturersScheduleDto } from './dto/update-lecturers-schedule.dto';

@Controller('lecturers-schedule')
export class LecturersScheduleController {
  constructor(private readonly lecturersScheduleService: LecturersScheduleService) {}

  @Post()
  create(@Body() createLecturersScheduleDto: CreateLecturersScheduleDto) {
    return this.lecturersScheduleService.create(createLecturersScheduleDto);
  }

  @Get()
  findAll() {
    return this.lecturersScheduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lecturersScheduleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLecturersScheduleDto: UpdateLecturersScheduleDto) {
    return this.lecturersScheduleService.update(+id, updateLecturersScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lecturersScheduleService.remove(+id);
  }
}
