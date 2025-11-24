import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuotaManageService } from './quota-manage.service';
import { CreateQuotaManageDto } from '../../../util/dto/create-request/create-quota-manage.dto';
import { UpdateQuotaManageDto } from '../../../util/dto/update-request/update-quota-manage.dto';

@Controller()
export class QuotaManageController {
  constructor(private readonly quotaManageService: QuotaManageService) {}

  @Post()
  create(@Body() createQuotaManageDto: CreateQuotaManageDto) {
    return this.quotaManageService.create(createQuotaManageDto);
  }

  @Get()
  findAll() {
    return this.quotaManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quotaManageService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuotaManageDto: UpdateQuotaManageDto,
  ) {
    return this.quotaManageService.update(+id, updateQuotaManageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quotaManageService.remove(+id);
  }
}
