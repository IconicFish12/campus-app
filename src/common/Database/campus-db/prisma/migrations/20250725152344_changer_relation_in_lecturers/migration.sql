/*
  Warnings:

  - You are about to drop the column `department_id` on the `lecturers` table. All the data in the column will be lost.
  - Added the required column `program_id` to the `lecturers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "lecturers" DROP CONSTRAINT "lecturers_department_id_fkey";

-- AlterTable
ALTER TABLE "lecturers" DROP COLUMN "department_id",
ADD COLUMN     "program_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "lecturers" ADD CONSTRAINT "lecturers_program_id_fkey" FOREIGN KEY ("program_id") REFERENCES "programs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
