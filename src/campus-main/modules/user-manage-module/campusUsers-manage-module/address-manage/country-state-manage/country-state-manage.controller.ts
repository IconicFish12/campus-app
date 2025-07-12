import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CountryStateManageService } from './country-state-manage.service';
import { CreateCountryStateManageDto } from './dto/create-country-state-manage.dto';
import { UpdateCountryStateManageDto } from './dto/update-country-state-manage.dto';

@Controller()
export class CountryStateManageController {
  constructor(
    private readonly countryStateManageService: CountryStateManageService,
  ) {}

  @Post()
  create(@Body() createCountryStateManageDto: CreateCountryStateManageDto) {
    return this.countryStateManageService.create(createCountryStateManageDto);
  }

  @Get()
  findAll() {
    return this.countryStateManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.countryStateManageService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCountryStateManageDto: UpdateCountryStateManageDto,
  ) {
    return this.countryStateManageService.update(
      +id,
      updateCountryStateManageDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countryStateManageService.remove(+id);
  }
}
