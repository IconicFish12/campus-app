import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
// import { Expose } from 'class-transformer';
import { IsUnique } from 'src/common/pipes/validators/is-unique-validators';

export class CreateDepartmentManageDto {
  // Departments Name
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
    message: 'Department name is cannot be empty',
  })
  // @Expose({ name: 'department_name' })
  @IsUnique(
    { model: 'departments', field: 'name' },
    {
      message: 'The study departments name has been registered',
    },
  )
  readonly name: string;

  // Departments Code
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
  // @Expose({ name: 'department_code' })
  @IsUnique(
    { model: 'departments', field: 'code' },
    {
      message: 'The study department code has been registered',
    },
  )
  readonly code: string;

  // Departments Descpription
  @IsString({
    message: 'Department Description is must be a text',
  })
  @IsNotEmpty({
    message: 'Department Decsiption is cannot be empty',
  })
  @IsOptional()
  // @Expose({ name: 'description' })
  readonly description: string;
}
