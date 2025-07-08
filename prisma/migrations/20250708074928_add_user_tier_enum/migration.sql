-- CreateEnum
CREATE TYPE "Tier" AS ENUM ('free', 'pro', 'enterprise');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "tier" "Tier" NOT NULL DEFAULT 'free';
