/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
} from '@prisma/client/runtime/client';
import { Response } from 'express';

@Catch(
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
)
export class PrismaExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(PrismaExceptionFilter.name);

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Terjadi kesalahan tak terduga di server.';
    let errorType = 'InternalServerError';
    let prismaCode: string | undefined;
    let targetField: string | undefined;

    if (exception instanceof PrismaClientKnownRequestError) {
      prismaCode = exception.code;
      targetField = (exception.meta as any)?.target;

      switch (exception.code) {
        case 'P2000': // The value provided for the column is too long for the column's type.
          status = HttpStatus.BAD_REQUEST;
          message = `Value too long for column: ${targetField || 'undefined'}.`;
          errorType = 'BadRequest';
          break;
        case 'P2002': // Unique constraint violation
          status = HttpStatus.CONFLICT; // 409 Conflict
          message = `Data already exists fork ${targetField ? `column '${targetField}'` : 'unique entry'}.`;
          errorType = 'Conflict';
          break;
        case 'P2003': // Foreign key constraint violation
          status = HttpStatus.BAD_REQUEST; // Atau HttpStatus.CONFLICT
          message = `Data cannot be processed due to invalid relation.`;
          errorType = 'ForeignKeyConstraintViolation';
          break;
        case 'P2025': // Record not found (digunakan oleh findUniqueOrThrow, findFirstOrThrow, update, delete)
          status = HttpStatus.NOT_FOUND; // 404 Not Found
          message = `Resource not found.`;
          errorType = 'NotFound';
          break;
        case 'P1000': // Authentication failed
        case 'P1001': // Can't reach database server
        case 'P1002': // Database server timed out
          status = HttpStatus.SERVICE_UNAVAILABLE; // Atau InternalServerError
          message =
            'Unable to connect to the database. Please try again later.';
          errorType = 'DatabaseConnectionError';
          break;
        default:
          status = HttpStatus.INTERNAL_SERVER_ERROR;
          message = `A database error occurred: ${exception.message.split('\n')[0]}`; // Ambil baris pertama pesan error
          errorType = 'PrismaKnownError';
          break;
      }
      this.logger.error(
        `Prisma Known Error (${exception.code}): ${exception.message}`,
        exception.stack,
      );
    } else if (exception instanceof PrismaClientValidationError) {
      status = HttpStatus.BAD_REQUEST; // Atau INTERNAL_SERVER_ERROR jika ini bug internal
      message = `Database query validation error. Please check your input.`; // Atau "Mohon hubungi administrator"
      errorType = 'PrismaValidationError';
      this.logger.error(
        `Prisma Validation Error: ${exception.message}`,
        exception.stack,
      );
    } else if (exception instanceof PrismaClientInitializationError) {
      status = HttpStatus.SERVICE_UNAVAILABLE;
      message = 'The application failed to connect to the database on startup.';
      errorType = 'PrismaInitializationError';
      this.logger.error(
        `Prisma Initialization Error: ${exception.message}`,
        exception.stack,
      );
    } else if (exception instanceof PrismaClientRustPanicError) {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = 'A fatal error occurred in the Prisma database engine.';
      errorType = 'PrismaRustPanicError';
      this.logger.error(
        `Prisma Rust Panic Error: ${exception.message}`,
        exception.stack,
      );
    }

    response.status(status).json({
      statusCode: status,
      message: message,
      error: errorType,
      // Tambahkan detail Prisma Code jika di development atau untuk debugging
      prismaCode:
        process.env.NODE_ENV !== 'production' ? prismaCode : undefined,
      target: process.env.NODE_ENV !== 'production' ? targetField : undefined,
    });
  }
}
