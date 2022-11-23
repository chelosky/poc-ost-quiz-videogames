import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/services/prisma/prisma.service';

@Injectable()
export class QuizService {
  constructor(private readonly prismaService: PrismaService) {}

  getAll() {
    return this.prismaService.quiz.findMany({});
  }
}
