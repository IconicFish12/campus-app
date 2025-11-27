import { PartialType } from '@nestjs/mapped-types';
import { CreateCityManageDto } from '../../../util/dto/create-request/create-city-manage.dto';

export class UpdateCityManageDto extends PartialType(CreateCityManageDto) {}
