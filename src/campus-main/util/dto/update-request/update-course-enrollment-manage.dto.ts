import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseEnrollmentManageDto } from '../../../../util/dto/create-request/create-course-enrollment-manage.dto';

export class UpdateCourseEnrollmentManageDto extends PartialType(
  CreateCourseEnrollmentManageDto,
) {}
