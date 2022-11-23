import { Module, Scope } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ConfigModule } from './config/config.module';
import { QuizModule } from './modules/quiz/quiz.module';
import { PrismaModule } from './shared/services/prisma/prisma.module';
import { HttpExceptionFilter } from './filters/http-exeception.filter';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

@Module({
  imports: [ConfigModule, PrismaModule, QuizModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
