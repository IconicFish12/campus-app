import { PartialType } from '@nestjs/mapped-types';
import { CreateAttandanceDto } from '../../../util/dto/create-request/create-attandance.dto';

export class UpdateAttandanceDto extends PartialType(CreateAttandanceDto) {}
