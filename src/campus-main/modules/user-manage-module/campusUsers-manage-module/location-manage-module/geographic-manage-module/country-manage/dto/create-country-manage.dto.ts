import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateCountryManageDto {
  @IsString({
    message: 'Country name is must be a text',
  })
  @MinLength(4, {
    message: 'Country name must grater than 4 character',
  })
  @IsNotEmpty({
    message: 'Country name is cannot be empty',
  })
  readonly name: string;
}
