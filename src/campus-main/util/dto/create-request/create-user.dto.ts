// import { Exclude } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsMimeType,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  MaxLength,
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
    message: 'User First Name cannot be empty',
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
    message: 'User Last Name cannot be empty',
  })
  @IsString({
    message: 'User Last Name must be a text',
  })
  @MinLength(4, {})
  readonly lastName: string;

  @IsNotEmpty({
    message: 'Email cannot be empty',
  })
  @IsEmail(
    {
      ignore_max_length: true,
      allow_display_name: true,
    },
    {
      message: 'Email field must be an valid email',
    },
  )
  @IsUnique(
    {
      model: 'user',
      field: 'email',
    },
    {
      message: 'Email has been registered',
    },
  )
  @IsString({
    message: 'Email must be an text',
  })
  readonly email: string;

  @IsNotEmpty({
    message: 'Password cannot be empty',
  })
  @IsStrongPassword(
    {
      minLength: 4,
      minLowercase: 1,
      minNumbers: 3,
      minSymbols: 1,
      minUppercase: 1,
    },
    {
      message:
        'Password must be at least 4 characters long, 3 numbers, and 1 symbol.',
    },
  )
  @MaxLength(10, {
    message: 'Password must less than 10 characters',
  })
  readonly password: string;

  @IsNotEmpty({
    message: 'the confirm password cannot be empty ',
  })
  @IsMatch('password', {
    message: 'the confirm password must match with the password',
  })
  readonly confirmPassword: string;

  @IsNotEmpty({
    message: 'the Gender cannot be empty',
  })
  @IsEnum(Gender, {
    message: 'User Gender is Not valid, Choose between MALE, FEMALE and OTHER',
  })
  readonly gender: Gender;

  @IsEnum(Status, {
    message:
      'User Statue is Not Valid, Choose between ACTIVE, INACTIVE, and SUSPENDED',
  })
  readonly status: Status;

  @IsOptional()
  @IsMimeType()
  readonly profilePicture: string;
}
