import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const jobsTable = pgTable('jobs', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  role: varchar({ length: 255 }).notNull(),
  location: varchar({ length: 255 }).notNull(),
});

export type SelectJob = typeof jobsTable.$inferSelect;
export type InsertJob = typeof jobsTable.$inferInsert;
