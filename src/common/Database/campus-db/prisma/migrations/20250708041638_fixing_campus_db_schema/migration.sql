/*
  Warnings:

  - The values [PENUH] on the enum `ClassScheduleStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [VISSTING] on the enum `EmploymentStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [SUSPANDED] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `employee_id` on the `employees` table. All the data in the column will be lost.
  - The primary key for the `lecturers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `lecturers` table. All the data in the column will be lost.
  - You are about to drop the column `roles_name` on the `roles` table. All the data in the column will be lost.
  - The `status` column on the `student_enrollments` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `students` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `students` table. All the data in the column will be lost.
  - The primary key for the `user_roles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `roleId` on the `user_roles` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `user_roles` table. All the data in the column will be lost.
  - You are about to drop the column `addressId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `firt_name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `progams` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[employee_code]` on the table `employees` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nidn]` on the table `lecturers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[role_name]` on the table `roles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[address_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updated_at` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_code` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lecturer_id` to the `lecturers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role_name` to the `roles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_id` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role_id` to the `user_roles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `user_roles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EnrollmentStatus" AS ENUM ('ENROLLED', 'DROPPED', 'COMPLETED', 'NOT_ENROLLED', 'REGISTERED');

-- AlterEnum
BEGIN;
CREATE TYPE "ClassScheduleStatus_new" AS ENUM ('ACTIVE', 'DELAY', 'CANCELLED', 'FULL');
ALTER TABLE "class_schedules" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "class_schedules" ALTER COLUMN "status" TYPE "ClassScheduleStatus_new" USING ("status"::text::"ClassScheduleStatus_new");
ALTER TYPE "ClassScheduleStatus" RENAME TO "ClassScheduleStatus_old";
ALTER TYPE "ClassScheduleStatus_new" RENAME TO "ClassScheduleStatus";
DROP TYPE "ClassScheduleStatus_old";
ALTER TABLE "class_schedules" ALTER COLUMN "status" SET DEFAULT 'ACTIVE';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "EmploymentStatus_new" AS ENUM ('FULL_TIME', 'PART_TIME', 'VISITING');
ALTER TABLE "employees" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "lecturers" ALTER COLUMN "employment_status" TYPE "EmploymentStatus_new" USING ("employment_status"::text::"EmploymentStatus_new");
ALTER TABLE "employees" ALTER COLUMN "status" TYPE "EmploymentStatus_new" USING ("status"::text::"EmploymentStatus_new");
ALTER TYPE "EmploymentStatus" RENAME TO "EmploymentStatus_old";
ALTER TYPE "EmploymentStatus_new" RENAME TO "EmploymentStatus";
DROP TYPE "EmploymentStatus_old";
ALTER TABLE "employees" ALTER COLUMN "status" SET DEFAULT 'FULL_TIME';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('ACTIVE', 'INACTIVE', 'SUSPENDED');
ALTER TABLE "users" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "users" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
ALTER TABLE "users" ALTER COLUMN "status" SET DEFAULT 'ACTIVE';
COMMIT;

-- DropForeignKey
ALTER TABLE "attendances" DROP CONSTRAINT "attendances_student_id_fkey";

-- DropForeignKey
ALTER TABLE "class_schedules" DROP CONSTRAINT "class_schedules_lecturer_id_fkey";

-- DropForeignKey
ALTER TABLE "courses" DROP CONSTRAINT "courses_program_id_fkey";

-- DropForeignKey
ALTER TABLE "lecturers" DROP CONSTRAINT "lecturers_user_id_fkey";

-- DropForeignKey
ALTER TABLE "progams" DROP CONSTRAINT "progams_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "student_enrollments" DROP CONSTRAINT "student_enrollments_student_id_fkey";

-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_program_id_fkey";

-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_roleId_fkey";

-- DropForeignKey
ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_userId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_addressId_fkey";

-- DropIndex
DROP INDEX "employees_employee_id_key";

-- DropIndex
DROP INDEX "lecturers_department_id_key";

-- DropIndex
DROP INDEX "students_program_id_key";

-- DropIndex
DROP INDEX "users_addressId_key";

-- AlterTable
ALTER TABLE "addresses" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "attendances" ADD COLUMN     "classEnrollmentClassScheduleId" UUID,
ADD COLUMN     "classEnrollmentStudentId" UUID;

-- AlterTable
ALTER TABLE "employees" DROP COLUMN "employee_id",
ADD COLUMN     "employee_code" TEXT NOT NULL,
ALTER COLUMN "hire_date" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "lecturers" DROP CONSTRAINT "lecturers_pkey",
DROP COLUMN "user_id",
ADD COLUMN     "lecturer_id" UUID NOT NULL,
ALTER COLUMN "hire_date" SET DATA TYPE DATE,
ADD CONSTRAINT "lecturers_pkey" PRIMARY KEY ("lecturer_id");

-- AlterTable
ALTER TABLE "roles" DROP COLUMN "roles_name",
ADD COLUMN     "role_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "student_enrollments" DROP COLUMN "status",
ADD COLUMN     "status" "EnrollmentStatus" NOT NULL DEFAULT 'NOT_ENROLLED';

-- AlterTable
ALTER TABLE "students" DROP CONSTRAINT "students_pkey",
DROP COLUMN "user_id",
ADD COLUMN     "student_id" UUID NOT NULL,
ADD CONSTRAINT "students_pkey" PRIMARY KEY ("student_id");

-- AlterTable
ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_pkey",
DROP COLUMN "roleId",
DROP COLUMN "userId",
ADD COLUMN     "role_id" UUID NOT NULL,
ADD COLUMN     "user_id" UUID NOT NULL,
ADD CONSTRAINT "user_roles_pkey" PRIMARY KEY ("user_id", "role_id");

-- AlterTable
ALTER TABLE "users" DROP COLUMN "addressId",
DROP COLUMN "firt_name",
ADD COLUMN     "address_id" UUID,
ADD COLUMN     "first_name" TEXT NOT NULL;

-- DropTable
DROP TABLE "progams";

-- DropEnum
DROP TYPE "StudentEnrollmentStatus";

-- CreateTable
CREATE TABLE "programs" (
    "id" UUID NOT NULL,
    "program_name" TEXT NOT NULL,
    "program_code" TEXT NOT NULL,
    "program_level" "ProgramLevel" NOT NULL,
    "department_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "programs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "general_schedules" (
    "id" UUID NOT NULL,
    "schedule_name" TEXT NOT NULL,
    "schedule_desc" TEXT,
    "schedule_type" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "activities_location" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "general_schedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lecturers_schedules" (
    "id" UUID NOT NULL,
    "lecturer_id" UUID NOT NULL,
    "type_activities" TEXT NOT NULL,
    "class_schedule_id" UUID,
    "schedule_name" TEXT,
    "schedule_desc" TEXT,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "day_of_week" "DayOfWeek",
    "activities_location" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lecturers_schedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admission_quotas" (
    "id" UUID NOT NULL,
    "academic_year_id" UUID NOT NULL,
    "program_id" UUID NOT NULL,
    "quota_available" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "admission_quotas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "course_enrollments" (
    "id" UUID NOT NULL,
    "student_id" UUID NOT NULL,
    "course_id" UUID NOT NULL,
    "semester_id" UUID NOT NULL,
    "enrollment_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "EnrollmentStatus" NOT NULL DEFAULT 'NOT_ENROLLED',
    "final_grade" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "course_enrollments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "class_enrollments" (
    "student_id" UUID NOT NULL,
    "class_schedule_id" UUID NOT NULL,
    "class_id" UUID NOT NULL,
    "enrollment_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "EnrollmentStatus" NOT NULL DEFAULT 'NOT_ENROLLED',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "class_enrollments_pkey" PRIMARY KEY ("student_id","class_schedule_id")
);

-- CreateTable
CREATE TABLE "classes" (
    "id" UUID NOT NULL,
    "class_name" TEXT NOT NULL,
    "program_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "classes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "programs_program_name_key" ON "programs"("program_name");

-- CreateIndex
CREATE UNIQUE INDEX "programs_program_code_key" ON "programs"("program_code");

-- CreateIndex
CREATE UNIQUE INDEX "lecturers_schedules_lecturer_id_start_date_end_date_key" ON "lecturers_schedules"("lecturer_id", "start_date", "end_date");

-- CreateIndex
CREATE UNIQUE INDEX "course_enrollments_student_id_course_id_semester_id_key" ON "course_enrollments"("student_id", "course_id", "semester_id");

-- CreateIndex
CREATE UNIQUE INDEX "class_enrollments_student_id_class_schedule_id_key" ON "class_enrollments"("student_id", "class_schedule_id");

-- CreateIndex
CREATE UNIQUE INDEX "employees_employee_code_key" ON "employees"("employee_code");

-- CreateIndex
CREATE UNIQUE INDEX "lecturers_nidn_key" ON "lecturers"("nidn");

-- CreateIndex
CREATE UNIQUE INDEX "roles_role_name_key" ON "roles"("role_name");

-- CreateIndex
CREATE UNIQUE INDEX "users_address_id_key" ON "users"("address_id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "addresses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "programs" ADD CONSTRAINT "programs_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_program_id_fkey" FOREIGN KEY ("program_id") REFERENCES "programs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lecturers" ADD CONSTRAINT "lecturers_lecturer_id_fkey" FOREIGN KEY ("lecturer_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_program_id_fkey" FOREIGN KEY ("program_id") REFERENCES "programs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_schedules" ADD CONSTRAINT "class_schedules_lecturer_id_fkey" FOREIGN KEY ("lecturer_id") REFERENCES "lecturers"("lecturer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_enrollments" ADD CONSTRAINT "student_enrollments_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("student_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("student_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_classEnrollmentStudentId_classEnrollmentClassS_fkey" FOREIGN KEY ("classEnrollmentStudentId", "classEnrollmentClassScheduleId") REFERENCES "class_enrollments"("student_id", "class_schedule_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lecturers_schedules" ADD CONSTRAINT "lecturers_schedules_lecturer_id_fkey" FOREIGN KEY ("lecturer_id") REFERENCES "lecturers"("lecturer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lecturers_schedules" ADD CONSTRAINT "lecturers_schedules_class_schedule_id_fkey" FOREIGN KEY ("class_schedule_id") REFERENCES "class_schedules"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admission_quotas" ADD CONSTRAINT "admission_quotas_academic_year_id_fkey" FOREIGN KEY ("academic_year_id") REFERENCES "academic_years"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admission_quotas" ADD CONSTRAINT "admission_quotas_program_id_fkey" FOREIGN KEY ("program_id") REFERENCES "programs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_enrollments" ADD CONSTRAINT "course_enrollments_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("student_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_enrollments" ADD CONSTRAINT "course_enrollments_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_enrollments" ADD CONSTRAINT "course_enrollments_semester_id_fkey" FOREIGN KEY ("semester_id") REFERENCES "semesters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_enrollments" ADD CONSTRAINT "class_enrollments_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("student_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_enrollments" ADD CONSTRAINT "class_enrollments_class_schedule_id_fkey" FOREIGN KEY ("class_schedule_id") REFERENCES "class_schedules"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_enrollments" ADD CONSTRAINT "class_enrollments_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_program_id_fkey" FOREIGN KEY ("program_id") REFERENCES "programs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
