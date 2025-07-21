/*
  Warnings:

  - You are about to drop the column `address_id` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `addresses` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_address_id_fkey";

-- DropIndex
DROP INDEX "users_address_id_key";

-- AlterTable
ALTER TABLE "addresses" ADD COLUMN     "user_id" UUID;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "address_id";

-- CreateIndex
CREATE UNIQUE INDEX "addresses_user_id_key" ON "addresses"("user_id");

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
