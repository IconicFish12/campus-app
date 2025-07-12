import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LecturersService } from './lecturers.service';
import { CreateLecturerDto } from './dto/create-lecturer.dto';
import { UpdateLecturerDto } from './dto/update-lecturer.dto';

@Controller()
export class LecturersController {
  constructor(private readonly lecturersService: LecturersService) {}

  @Post()
  create(@Body() createLecturerDto: CreateLecturerDto) {
    return this.lecturersService.create(createLecturerDto);
  }

  @Get()
  findAll() {
    return this.lecturersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lecturersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLecturerDto: UpdateLecturerDto,
  ) {
    return this.lecturersService.update(+id, updateLecturerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lecturersService.remove(+id);
  }
}
