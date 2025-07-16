import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Request, Response as ExpressResponse } from 'express';

export interface Response<T> {
  message: string;
  data: T;
}

@Injectable()
export class ResponseMappingInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const request = context.switchToHttp().getRequest<Request>();
    const response = context.switchToHttp().getResponse<ExpressResponse>();

    const statusCode = response.statusCode;
    let defaultMessage: string;

    switch (request.method) {
      case 'POST':
        defaultMessage = 'Data created successfully.';
        break;
      case 'GET':
        defaultMessage = 'Data retrieved successfully.';
        break;
      case 'PUT':
      case 'PATCH':
        defaultMessage = 'Data updated successfully.';
        break;
      case 'DELETE':
        defaultMessage = 'Data was successfully deleted.';
        break;
      default:
        defaultMessage = 'The operation was successful.';
    }

    return next.handle().pipe(
      map((data: T) => ({
        statusCode,
        message: defaultMessage,
        data: data,
      })),
    );
  }
}
