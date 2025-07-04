import { PartialType } from '@nestjs/mapped-types';
import { CreateCountryStateManageDto } from './create-country-state-manage.dto';

export class UpdateCountryStateManageDto extends PartialType(CreateCountryStateManageDto) {}
