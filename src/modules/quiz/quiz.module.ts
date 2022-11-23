import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { PrismaModule } from '../../shared/services/prisma/prisma.module';

@Module({
  providers: [QuizService],
  controllers: [QuizController],
  imports: [PrismaModule],
})
export class QuizModule {}
