-- CreateEnum
CREATE TYPE "AttendanceStatus" AS ENUM ('PRESENT', 'ABSENT', 'SICK', 'PERMITTED', 'LATE');

-- CreateTable
CREATE TABLE "attendances" (
    "id" UUID NOT NULL,
    "student_id" UUID NOT NULL,
    "class_schedule_id" UUID NOT NULL,
    "status" "AttendanceStatus" NOT NULL DEFAULT 'ABSENT',
    "recorded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "attendances_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "attendances_student_id_class_schedule_id_key" ON "attendances"("student_id", "class_schedule_id");

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_class_schedule_id_fkey" FOREIGN KEY ("class_schedule_id") REFERENCES "class_schedules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
