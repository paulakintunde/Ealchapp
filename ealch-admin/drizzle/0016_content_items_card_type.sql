CREATE TYPE "public"."card_type" AS ENUM('vocab', 'gapfill', 'conjugation', 'error', 'grammar', 'register');--> statement-breakpoint
ALTER TABLE "content_items" ADD COLUMN "card_type" "card_type";--> statement-breakpoint
ALTER TABLE "content_items" ADD COLUMN "prompt" text;