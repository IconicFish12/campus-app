import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from '../../../../util/dto/create-request/create-student.dto';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {}
