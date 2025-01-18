import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const jobsTable = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  role: varchar({ length: 255 }).notNull(),
  location: varchar({ length: 255 }).notNull(),
});
