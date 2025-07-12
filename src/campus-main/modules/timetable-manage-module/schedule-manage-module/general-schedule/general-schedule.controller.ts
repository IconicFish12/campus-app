import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GeneralScheduleService } from './general-schedule.service';
import { CreateGeneralScheduleDto } from './dto/create-general-schedule.dto';
import { UpdateGeneralScheduleDto } from './dto/update-general-schedule.dto';

@Controller('general-schedule')
export class GeneralScheduleController {
  constructor(
    private readonly generalScheduleService: GeneralScheduleService,
  ) {}

  @Post()
  create(@Body() createGeneralScheduleDto: CreateGeneralScheduleDto) {
    return this.generalScheduleService.create(createGeneralScheduleDto);
  }

  @Get()
  findAll() {
    return this.generalScheduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generalScheduleService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGeneralScheduleDto: UpdateGeneralScheduleDto,
  ) {
    return this.generalScheduleService.update(+id, updateGeneralScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generalScheduleService.remove(+id);
  }
}
