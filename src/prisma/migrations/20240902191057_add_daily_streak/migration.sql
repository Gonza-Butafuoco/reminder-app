/*
  Warnings:

  - A unique constraint covering the columns `[date]` on the table `DailyStreak` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "DailyStreak_date_key" ON "DailyStreak"("date");
