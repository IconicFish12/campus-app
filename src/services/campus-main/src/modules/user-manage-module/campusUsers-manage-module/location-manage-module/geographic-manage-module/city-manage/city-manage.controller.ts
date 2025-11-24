import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CityManageService } from './city-manage.service';
import { CreateCityManageDto } from '../../../../../../util/dto/create-request/create-city-manage.dto';
import { UpdateCityManageDto } from '../../../../../../util/dto/update-request/update-city-manage.dto';

@Controller()
export class CityManageController {
  constructor(private readonly cityManageService: CityManageService) {}

  @Post()
  create(@Body() createCityManageDto: CreateCityManageDto) {
    return this.cityManageService.create(createCityManageDto);
  }

  @Get()
  findAll() {
    return this.cityManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cityManageService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCityManageDto: UpdateCityManageDto,
  ) {
    return this.cityManageService.update(id, updateCityManageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cityManageService.remove(id);
  }
}
