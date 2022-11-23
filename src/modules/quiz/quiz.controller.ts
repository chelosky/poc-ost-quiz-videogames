import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { TransformInterceptor } from '../../interceptors/transform.interceptor';

@Controller('quiz')
@UseInterceptors(TransformInterceptor)
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get()
  public async getAll() {
    return this.quizService.getAll();
  }
}
