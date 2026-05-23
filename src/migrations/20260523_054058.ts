import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "contacts" (
      "id" serial PRIMARY KEY NOT NULL,
      "name" varchar NOT NULL,
      "email" varchar NOT NULL,
      "company" varchar,
      "message" varchar NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE INDEX IF NOT EXISTS "contacts_updated_at_idx" ON "contacts" USING btree ("updated_at");
    CREATE INDEX IF NOT EXISTS "contacts_created_at_idx" ON "contacts" USING btree ("created_at");

    ALTER TABLE "payload_locked_documents_rels"
      ADD COLUMN IF NOT EXISTS "contacts_id" integer;

    DO $$ BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_constraint
        WHERE conname = 'payload_locked_documents_rels_contacts_fk'
      ) THEN
        ALTER TABLE "payload_locked_documents_rels"
          ADD CONSTRAINT "payload_locked_documents_rels_contacts_fk"
          FOREIGN KEY ("contacts_id")
          REFERENCES "public"."contacts"("id")
          ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;

    CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_contacts_id_idx"
      ON "payload_locked_documents_rels" USING btree ("contacts_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "payload_locked_documents_rels"
      DROP COLUMN IF EXISTS "contacts_id";

    DROP TABLE IF EXISTS "contacts";
  `)
}
