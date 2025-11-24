import { PartialType } from '@nestjs/mapped-types';
import { CreateLecturerDto } from '../../../util/dto/create-request/create-lecturer.dto';

export class UpdateLecturerDto extends PartialType(CreateLecturerDto) {}
