import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AcademyYearsService } from './academy-years.service';
import { CreateAcademyYearDto } from './dto/create-academy-year.dto';
import { UpdateAcademyYearDto } from './dto/update-academy-year.dto';

@Controller('academy-years')
export class AcademyYearsController {
  constructor(private readonly academyYearsService: AcademyYearsService) {}

  @Post()
  create(@Body() createAcademyYearDto: CreateAcademyYearDto) {
    return this.academyYearsService.create(createAcademyYearDto);
  }

  @Get()
  findAll() {
    return this.academyYearsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.academyYearsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcademyYearDto: UpdateAcademyYearDto) {
    return this.academyYearsService.update(+id, updateAcademyYearDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.academyYearsService.remove(+id);
  }
}
