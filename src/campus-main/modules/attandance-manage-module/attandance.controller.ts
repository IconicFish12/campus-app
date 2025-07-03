import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttandanceService } from './attandance.service';
import { CreateAttandanceDto } from './dto/create-attandance.dto';
import { UpdateAttandanceDto } from './dto/update-attandance.dto';

@Controller('attandance')
export class AttandanceController {
  constructor(private readonly attandanceService: AttandanceService) {}

  @Post()
  create(@Body() createAttandanceDto: CreateAttandanceDto) {
    return this.attandanceService.create(createAttandanceDto);
  }

  @Get()
  findAll() {
    return this.attandanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attandanceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttandanceDto: UpdateAttandanceDto) {
    return this.attandanceService.update(+id, updateAttandanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attandanceService.remove(+id);
  }
}
