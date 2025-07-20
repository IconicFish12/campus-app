import { PartialType } from '@nestjs/mapped-types';
import { CreateCountryManageDto } from './create-country-manage.dto';

export class UpdateCountryManageDto extends PartialType(
  CreateCountryManageDto,
) {}
