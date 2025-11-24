import { PartialType } from '@nestjs/mapped-types';
import { CreateAddressManageDto } from './create-address-manage.dto';

export class UpdateAddressManageDto extends PartialType(CreateAddressManageDto) {}
