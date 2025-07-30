import { PartialType } from '@nestjs/mapped-types';
import { CreateCountryManageDto } from '../../../../../../../util/dto/create-request/create-country-manage.dto';

export class UpdateCountryManageDto extends PartialType(
  CreateCountryManageDto,
) {}
