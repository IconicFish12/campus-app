/*
  Warnings:

  - Made the column `nidn` on table `lecturers` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "lecturers" ALTER COLUMN "nidn" SET NOT NULL;

-- CreateTable
CREATE TABLE "employees" (
    "user_id" UUID NOT NULL,
    "employee_id" TEXT,
    "position" TEXT,
    "department" TEXT,
    "hire_date" TIMESTAMP(3) NOT NULL,
    "status" "EmploymentStatus" NOT NULL DEFAULT 'FULL_TIME',
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employees_employee_id_key" ON "employees"("employee_id");

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
