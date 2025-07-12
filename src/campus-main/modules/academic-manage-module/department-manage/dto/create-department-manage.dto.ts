import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { Expose } from 'class-transformer';

export class CreateDepartmentManageDto {
  @IsString({
    message: 'Department name is must be a text',
  })
  @MaxLength(15, {
    message: 'Department name must less than 15 character',
  })
  @MinLength(4, {
    message: 'Department name must grater than 4 character',
  })
  @IsNotEmpty({
    message: 'Departmnet name is cannot be empty',
  })
  @Expose({ name: 'department_name' })
  // @Transform(({ value }) => value.trim())
  readonly name: string;

  @IsString({
    message: 'Department code is must be a text',
  })
  @MaxLength(8, {
    message: 'Department code must less than 8 character',
  })
  @MinLength(4, {
    message: 'Department code must grater than 4 character',
  })
  @IsNotEmpty({
    message: 'Department code is cannot be empty',
  })
  @Expose({ name: 'department_code' })
  readonly code: string;

  @IsString({
    message: 'Department Description is must be a text',
  })
  @IsNotEmpty({
    message: 'Department Decsiption is cannot be empty',
  })
  @Expose({ name: 'decription' })
  readonly desciption: string;
}
