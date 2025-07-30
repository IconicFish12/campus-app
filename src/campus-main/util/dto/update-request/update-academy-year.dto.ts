import { PartialType } from '@nestjs/mapped-types';
import { CreateAcademyYearDto } from '../../../../../util/dto/create-request/create-academy-year.dto';

export class UpdateAcademyYearDto extends PartialType(CreateAcademyYearDto) {}
