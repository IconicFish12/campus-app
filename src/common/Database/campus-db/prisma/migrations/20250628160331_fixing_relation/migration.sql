/*
  Warnings:

  - You are about to drop the column `country_id` on the `addresses` table. All the data in the column will be lost.
  - The `semester_offered` column on the `courses` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `departement_code` on the `departments` table. All the data in the column will be lost.
  - You are about to drop the column `departement_name` on the `departments` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[department_name]` on the table `departments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[department_code]` on the table `departments` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `city_id` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department_code` to the `departments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department_name` to the `departments` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `name` on the `semesters` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "SemesterStatus" AS ENUM ('ODD', 'EVEN', 'SHORT');

-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_country_id_fkey";

-- DropIndex
DROP INDEX "addresses_country_id_key";

-- DropIndex
DROP INDEX "departments_departement_code_key";

-- DropIndex
DROP INDEX "departments_departement_name_key";

-- AlterTable
ALTER TABLE "addresses" DROP COLUMN "country_id",
ADD COLUMN     "city_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "courses" DROP COLUMN "semester_offered",
ADD COLUMN     "semester_offered" "SemesterStatus";

-- AlterTable
ALTER TABLE "departments" DROP COLUMN "departement_code",
DROP COLUMN "departement_name",
ADD COLUMN     "department_code" TEXT NOT NULL,
ADD COLUMN     "department_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "semesters" DROP COLUMN "name",
ADD COLUMN     "name" "SemesterStatus" NOT NULL;

-- DropEnum
DROP TYPE "Offer";

-- DropEnum
DROP TYPE "SemesterName";

-- CreateIndex
CREATE UNIQUE INDEX "departments_department_name_key" ON "departments"("department_name");

-- CreateIndex
CREATE UNIQUE INDEX "departments_department_code_key" ON "departments"("department_code");

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
