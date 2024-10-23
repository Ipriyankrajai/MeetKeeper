import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { organizationsTable } from "./organizations";

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name"),
  email: text("email").notNull().unique(),
  organizationId: integer("organization_id")
    .notNull()
    .references(() => organizationsTable.id),
});

export type User = typeof usersTable.$inferSelect;
export type NewUser = typeof usersTable.$inferInsert;
