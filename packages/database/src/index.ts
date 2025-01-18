import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

import { usersTable, jobsTable } from '@/schema';

const dbUrl = process.env.DATABASE_URL!;

export const db = drizzle({
  connection: dbUrl,
  casing: 'snake_case',
  schema: {
    ...usersTable,
    ...jobsTable,
  },
});
