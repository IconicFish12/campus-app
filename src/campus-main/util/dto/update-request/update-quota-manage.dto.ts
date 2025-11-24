import { PartialType } from '@nestjs/mapped-types';
import { CreateQuotaManageDto } from '../../../util/dto/create-request/create-quota-manage.dto';

export class UpdateQuotaManageDto extends PartialType(CreateQuotaManageDto) {}
