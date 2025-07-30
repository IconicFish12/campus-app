import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CountryManageService } from './country-manage.service';
import { CreateCountryManageDto } from '../../../../../../util/dto/create-request/create-country-manage.dto';
import { UpdateCountryManageDto } from './dto/update-country-manage.dto';

@Controller()
export class CountryManageController {
  constructor(private readonly countryManageService: CountryManageService) {}

  @Post()
  create(@Body() createCountryManageDto: CreateCountryManageDto) {
    return this.countryManageService.create(createCountryManageDto);
  }

  @Get()
  findAll() {
    return this.countryManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.countryManageService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCountryManageDto: UpdateCountryManageDto,
  ) {
    return this.countryManageService.update(id, updateCountryManageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countryManageService.remove(id);
  }
}
