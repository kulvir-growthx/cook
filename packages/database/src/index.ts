import { drizzle } from 'drizzle-orm/node-postgres';
import { config } from 'dotenv';

import { usersTable } from '@/schema/users';
import { jobsTable } from '@/schema/jobs';

config();

const dbUrl = process.env.DATABASE_URL!;
console.log('dbstring is', dbUrl);

const schema = { ...usersTable, ...jobsTable };

export const db = drizzle({
  connection: dbUrl,
  casing: 'snake_case',
  schema,
});

export * from 'drizzle-orm/expressions';
