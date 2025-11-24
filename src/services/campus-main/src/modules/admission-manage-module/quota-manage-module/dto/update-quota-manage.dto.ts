import { PartialType } from '@nestjs/mapped-types';
import { CreateQuotaManageDto } from './create-quota-manage.dto';

export class UpdateQuotaManageDto extends PartialType(CreateQuotaManageDto) {}
