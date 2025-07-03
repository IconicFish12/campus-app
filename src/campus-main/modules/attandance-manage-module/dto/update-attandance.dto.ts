import { PartialType } from '@nestjs/mapped-types';
import { CreateAttandanceDto } from './create-attandance.dto';

export class UpdateAttandanceDto extends PartialType(CreateAttandanceDto) {}
