import { PartialType } from '@nestjs/mapped-types';
import { CreateAddressManageDto } from '../../../../../../util/dto/create-request/create-address-manage.dto';

export class UpdateAddressManageDto extends PartialType(
  CreateAddressManageDto,
) {}
