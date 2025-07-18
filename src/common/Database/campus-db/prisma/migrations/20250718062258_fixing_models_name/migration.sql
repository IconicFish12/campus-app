/*
  Warnings:

  - You are about to drop the column `enrollment_date` on the `class_enrollments` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `user_roles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_city_id_fkey";

-- DropForeignKey
ALTER TABLE "admission_quotas" DROP CONSTRAINT "admission_quotas_academic_year_id_fkey";

-- DropForeignKey
ALTER TABLE "admission_quotas" DROP CONSTRAINT "admission_quotas_program_id_fkey";

-- DropForeignKey
ALTER TABLE "attendances" DROP CONSTRAINT "attendances_class_schedule_id_fkey";

-- DropForeignKey
ALTER TABLE "cities" DROP CONSTRAINT "cities_state_id_fkey";

-- DropForeignKey
ALTER TABLE "class_schedules" DROP CONSTRAINT "class_schedules_course_id_fkey";

-- DropForeignKey
ALTER TABLE "class_schedules" DROP CONSTRAINT "class_schedules_semester_id_fkey";

-- DropForeignKey
ALTER TABLE "course_enrollments" DROP CONSTRAINT "course_enrollments_course_id_fkey";

-- DropForeignKey
ALTER TABLE "course_enrollments" DROP CONSTRAINT "course_enrollments_semester_id_fkey";

-- DropForeignKey
ALTER TABLE "courses" DROP CONSTRAINT "courses_program_id_fkey";

-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_user_id_fkey";

-- DropForeignKey
ALTER TABLE "lecturers" DROP CONSTRAINT "lecturers_department_id_fkey";

-- DropForeignKey
ALTER TABLE "lecturers" DROP CONSTRAINT "lecturers_lecturer_id_fkey";

-- DropForeignKey
ALTER TABLE "lecturers_schedules" DROP CONSTRAINT "lecturers_schedules_class_schedule_id_fkey";

-- DropForeignKey
ALTER TABLE "programs" DROP CONSTRAINT "programs_department_id_fkey";

-- DropForeignKey
ALTER TABLE "semesters" DROP CONSTRAINT "semesters_academic_year_id_fkey";

-- DropForeignKey
ALTER TABLE "states" DROP CONSTRAINT "states_country_id_fkey";

-- DropForeignKey
ALTER TABLE "student_enrollments" DROP CONSTRAINT "student_enrollments_class_schedule_id_fkey";

-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_program_id_fkey";

-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_student_id_fkey";

-- DropForeignKey
ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_role_id_fkey";

-- DropForeignKey
ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_user_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_address_id_fkey";

-- AlterTable
ALTER TABLE "class_enrollments" DROP COLUMN "enrollment_date";

-- AlterTable
ALTER TABLE "user_roles" ADD COLUMN     "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "addresses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cities" ADD CONSTRAINT "cities_state_id_fkey" FOREIGN KEY ("state_id") REFERENCES "states"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "states" ADD CONSTRAINT "states_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "programs" ADD CONSTRAINT "programs_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "departments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_program_id_fkey" FOREIGN KEY ("program_id") REFERENCES "programs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lecturers" ADD CONSTRAINT "lecturers_lecturer_id_fkey" FOREIGN KEY ("lecturer_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lecturers" ADD CONSTRAINT "lecturers_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "departments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_program_id_fkey" FOREIGN KEY ("program_id") REFERENCES "programs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "semesters" ADD CONSTRAINT "semesters_academic_year_id_fkey" FOREIGN KEY ("academic_year_id") REFERENCES "academic_years"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_schedules" ADD CONSTRAINT "class_schedules_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_schedules" ADD CONSTRAINT "class_schedules_semester_id_fkey" FOREIGN KEY ("semester_id") REFERENCES "semesters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_enrollments" ADD CONSTRAINT "student_enrollments_class_schedule_id_fkey" FOREIGN KEY ("class_schedule_id") REFERENCES "class_schedules"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_class_schedule_id_fkey" FOREIGN KEY ("class_schedule_id") REFERENCES "class_schedules"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lecturers_schedules" ADD CONSTRAINT "lecturers_schedules_class_schedule_id_fkey" FOREIGN KEY ("class_schedule_id") REFERENCES "class_schedules"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admission_quotas" ADD CONSTRAINT "admission_quotas_academic_year_id_fkey" FOREIGN KEY ("academic_year_id") REFERENCES "academic_years"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admission_quotas" ADD CONSTRAINT "admission_quotas_program_id_fkey" FOREIGN KEY ("program_id") REFERENCES "programs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_enrollments" ADD CONSTRAINT "course_enrollments_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_enrollments" ADD CONSTRAINT "course_enrollments_semester_id_fkey" FOREIGN KEY ("semester_id") REFERENCES "semesters"("id") ON DELETE CASCADE ON UPDATE CASCADE;
