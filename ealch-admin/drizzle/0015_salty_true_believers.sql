CREATE TYPE "public"."product_kind" AS ENUM('exam');--> statement-breakpoint
ALTER TYPE "public"."sub_store" ADD VALUE 'paystack';--> statement-breakpoint
CREATE TABLE "product_purchases" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"product" "product_kind" NOT NULL,
	"store" "sub_store" DEFAULT 'app_store' NOT NULL,
	"amount_cents" integer DEFAULT 0 NOT NULL,
	"currency" text DEFAULT 'USD' NOT NULL,
	"status" text DEFAULT 'paid' NOT NULL,
	"occurred_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "payments" ALTER COLUMN "currency" SET DEFAULT 'USD';--> statement-breakpoint
ALTER TABLE "product_purchases" ADD CONSTRAINT "product_purchases_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "product_purchases_user_idx" ON "product_purchases" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "product_purchases_product_idx" ON "product_purchases" USING btree ("product");