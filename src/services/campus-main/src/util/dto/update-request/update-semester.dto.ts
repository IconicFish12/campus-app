import { PartialType } from '@nestjs/mapped-types';
import { CreateSemesterDto } from '../../../util/dto/create-request/create-semester.dto';

export class UpdateSemesterDto extends PartialType(CreateSemesterDto) {}
