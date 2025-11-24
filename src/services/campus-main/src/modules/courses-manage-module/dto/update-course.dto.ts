import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from '../../../util/dto/create-request/create-course.dto';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
