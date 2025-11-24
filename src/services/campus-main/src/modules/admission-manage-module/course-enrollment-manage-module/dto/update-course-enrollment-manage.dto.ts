import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseEnrollmentManageDto } from './create-course-enrollment-manage.dto';

export class UpdateCourseEnrollmentManageDto extends PartialType(
  CreateCourseEnrollmentManageDto,
) {}
