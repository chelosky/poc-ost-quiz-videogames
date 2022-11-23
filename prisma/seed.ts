import { PrismaClient } from '@prisma/client';
import { quizData } from './data';
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.quiz.deleteMany();
    console.log('Deleted records in category table');

    await prisma.quiz.createMany({
      data: quizData,
    });
    console.log('Added category data');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
