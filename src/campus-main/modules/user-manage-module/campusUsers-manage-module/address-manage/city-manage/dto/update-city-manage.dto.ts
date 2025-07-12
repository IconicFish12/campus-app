import { PartialType } from '@nestjs/mapped-types';
import { CreateCityManageDto } from './create-city-manage.dto';

export class UpdateCityManageDto extends PartialType(CreateCityManageDto) {}
