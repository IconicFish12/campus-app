import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClassScheduleService } from './class-schedule.service';
import { CreateClassScheduleDto } from '../../../../util/dto/create-request/create-class-schedule.dto';
import { UpdateClassScheduleDto } from './dto/update-class-schedule.dto';

@Controller()
export class ClassScheduleController {
  constructor(private readonly classScheduleService: ClassScheduleService) {}

  @Post()
  create(@Body() createClassScheduleDto: CreateClassScheduleDto) {
    return this.classScheduleService.create(createClassScheduleDto);
  }

  @Get()
  findAll() {
    return this.classScheduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classScheduleService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateClassScheduleDto: UpdateClassScheduleDto,
  ) {
    return this.classScheduleService.update(+id, updateClassScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classScheduleService.remove(+id);
  }
}
