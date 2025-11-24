import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import {
  BadRequestException,
  INestApplication,
  // Session,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { ResponseMappingInterceptor } from './common/interceptors/responseMapping.interceptor.js';
import { CostumeValidationPipe } from './common/pipes/costume-validation.pipe.js';
import { PrismaExceptionFilter } from './common/filters/prisma-exception.filter.js';
import { useContainer } from 'class-validator';
// import cookieParser from 'cookie-parser';
// import { doubleCsrf } from 'csrf-csrf';
// import { MicroserviceOptions, Transport } from '@nestjs/microservices';
// import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<INestApplication>(AppModule, {
    cors: true,
    bodyParser: true,
    logger: ['error', 'warn', 'debug', 'verbose'],
  });

  // Using Nest JS inside Service
  useContainer(app.select(AppModule, { abortOnError: true }), {
    fallbackOnErrors: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        interface FormattedError {
          property: string;
          errors: string[];
        }

        const formatErrors = (errors: ValidationError[]): FormattedError[] => {
          const formattedErrors: FormattedError[] = [];
          for (const error of errors) {
            if (error.constraints) {
              formattedErrors.push({
                property: error.property,
                errors: Object.values(error.constraints),
              });
            }
            if (error.children && error.children.length > 0) {
              formattedErrors.push(...formatErrors(error.children));
            }
          }
          return formattedErrors;
        };

        const formattedValidationErrors = formatErrors(validationErrors);

        return new BadRequestException({
          message: 'Input Validation is Failed',
          errors: formattedValidationErrors,
        });
      },
    }),
    new CostumeValidationPipe(),
  );
  app.useGlobalInterceptors(new ResponseMappingInterceptor());
  app.useGlobalFilters(new PrismaExceptionFilter());

  // # Security Service Session
  // const {
  //   // invalidCsrfTokenError,
  //   // generateToken,
  //   // validateRequest,
  //   doubleCsrfProtection,
  // } = doubleCsrf({  });

  // app.use(Session());
  // app.use(cookieParser);
  // app.use(doubleCsrfProtection);

  // # Get The NestJS Configuration Service
  // const configService = app.get(ConfigService);

  // Microservice App Starter (Listeners/Consumers)

  // Message Broker && MultiDatabase Synchronization (RabbitMQ)
  // const rabbitMqMicroserviceOptions: MicroserviceOptions = {
  //   transport: Transport.RMQ, // Menggunakan Transport.RMQ
  //   options: {
  //     urls: [
  //       configService.get<string>('RABBITMQ_URL') || 'amqp://localhost:5672',
  //     ],
  //     queue:
  //       configService.get<string>('RABBITMQ_QUEUE_NAME_SYNC') ||
  //       'lms_sync_queue', // Antrean yang akan didengarkan
  //     queueOptions: {
  //       durable: true, // Pastikan antrean persisten
  //     },
  //   },
  // };
  // const rabbit = app.connectMicroservice<MicroserviceOptions>(rabbitMqMicroserviceOptions);

  // Redis Message Broker and Cache Management System (Redis)
  // const redisMicroserviceOptions: MicroserviceOptions = {
  //   transport: Transport.REDIS,
  //   options: {
  //     host: configService.get<string>('REDIS_HOST') || 'localhost',
  //     port: configService.get<number>('REDIS_PORT') || 6379,
  //   },
  // };
  // const redis = app.connectMicroservice<MicroserviceOptions>(redisMicroserviceOptions);

  // await app.startAllMicroservices(); // Memulai semua listener microservice yang terhubung
  await app.listen(process.env.PORT || 3000); // Memulai server HTTP
  console.log(`HTTP Application is running on: ${await app.getUrl()}`);

  // if (rabbit.on() && redis.on){
  //   console.log('All microservices listeners started.');
  // }
}
void bootstrap();
