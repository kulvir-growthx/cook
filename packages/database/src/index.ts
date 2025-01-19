import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

import { usersTable } from '@/schema/users';
import { jobsTable } from '@/schema/jobs';

const dbUrl = process.env.DATABASE_URL!;

export const db = drizzle({
  connection: dbUrl,
  casing: 'snake_case',
  schema: {
    ...usersTable,
    ...jobsTable,
  },
});
