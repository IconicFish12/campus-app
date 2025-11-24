import { ValidationOptions, registerDecorator } from 'class-validator';
import { IsMatchConstraint } from './constraint/is-match-constraint';

export function IsMatch(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [property], // 'property' akan menjadi argumen yang dilewatkan ke validator
      validator: IsMatchConstraint,
    });
  };
}
