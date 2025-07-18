import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsUniqueConstraint } from './is-unique-constraint';
import { CampusPrismaModelName } from './models/campus-prisma-models';

// Interface untuk opsi yang bisa Anda berikan ke dekorator @IsUnique()
interface IsUniqueDecoratorOptions {
  model: CampusPrismaModelName;
  field: string;
  excludeIdField?: string;
}

export function IsUnique(
  options: IsUniqueDecoratorOptions,
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [options.model, options.field, options.excludeIdField],
      validator: IsUniqueConstraint,
    });
  };
}
