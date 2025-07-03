import { PartialType } from '@nestjs/mapped-types';
import { CreateAcademyYearDto } from './create-academy-year.dto';

export class UpdateAcademyYearDto extends PartialType(CreateAcademyYearDto) {}
