import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsUniqueConstraint } from './is-unique-constraint';
import { CampusPrismaModelName } from './models/campus-model.prisma';

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
      name: 'IsUnique',
      async: true,
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [options.model, options.field, options.excludeIdField],
      validator: IsUniqueConstraint,
    });
  };
}
