import { Exclude } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsMimeType,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';
import {
  Gender,
  Status,
} from 'src/common/Database/campus-db/generated/campus-client';
import { IsMatch } from 'src/common/pipes/validators/is-match-validator';
import { IsUnique } from 'src/common/pipes/validators/is-unique-validators';

export class CreateUserDto {
  @IsNotEmpty({
    message: 'User First Name must not empty',
  })
  @IsString({
    message: 'User First Name must be a text',
  })
  @MinLength(4, {
    message: 'User First Name must greater than 4 character',
  })
  readonly firstName: string;

  @IsOptional()
  @IsString({
    message: 'User Middle Name must be a text',
  })
  @MinLength(4, {
    message: 'User Middle Name must greater than 4 character',
  })
  readonly middleName: string;

  @IsNotEmpty({
    message: 'User Last Name must not empty',
  })
  @IsString({
    message: 'User Last Name must be a text',
  })
  @MinLength(4, {})
  readonly lastName: string;

  @IsNotEmpty({
    message: '',
  })
  @IsEmail(
    {
      ignore_max_length: true,
      allow_display_name: true,
      require_display_name: true,
    },
    {
      message: '',
    },
  )
  @IsUnique(
    {
      model: 'user',
      field: 'email',
    },
    {
      message: '',
    },
  )
  @IsString({
    message: '',
  })
  readonly email: string;

  @IsNotEmpty({
    message: '',
  })
  @IsUnique(
    {
      model: 'user',
      field: 'password',
    },
    {
      message: '',
    },
  )
  @Exclude()
  @IsString({
    message: '',
  })
  @IsStrongPassword(
    {
      minLength: 4,
      minLowercase: 3,
      minNumbers: 3,
      minSymbols: 1,
      minUppercase: 1,
    },
    {
      groups: [''],
    },
  )
  readonly password: string;

  @IsString({
    message: '',
  })
  @IsMatch('password', {
    message: '',
  })
  readonly confirmPassword: string;

  @IsNotEmpty({
    message: '',
  })
  @IsEnum(Gender, {
    message: '',
  })
  readonly gender: Gender;

  @IsNotEmpty({
    message: '',
  })
  @IsEnum(Status, {
    message: '',
  })
  readonly status: Status;

  @IsOptional()
  @IsMimeType()
  readonly profilePicture: string;
}
