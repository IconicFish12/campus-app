-- CreateEnum
CREATE TYPE "AssignmentType" AS ENUM ('REGULAR_TASK', 'PROJECT', 'GROUP_ASSIGNMENT', 'ESSAY', 'PRESENTATION', 'FORMAL_EXAM', 'SPECIAL_TASK');

-- CreateEnum
CREATE TYPE "QuizType" AS ENUM ('QUIZ', 'MIDTERM_EXAM', 'FINAL_EXAM', 'PRACTICE_TEST', 'POLL', 'SURVEY');

-- AlterTable
ALTER TABLE "assignments" ADD COLUMN     "assignment_type" "AssignmentType" NOT NULL DEFAULT 'REGULAR_TASK';

-- AlterTable
ALTER TABLE "quizzes" ADD COLUMN     "quiz_type" "QuizType" NOT NULL DEFAULT 'QUIZ';
