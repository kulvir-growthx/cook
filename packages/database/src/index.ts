import { drizzle } from 'drizzle-orm/node-postgres';

import { usersTable, jobsTable } from '@/schema';

const getEnvVariable = (name: string) => {
  const value = process.env[name];
  if (value == null) throw new Error(`environment variable ${name} not found`);
  return value;
};

const schema = { ...usersTable, ...jobsTable };

export const db = drizzle({
  connection: getEnvVariable('DATABASE_URL'),
  casing: 'snake_case',
  schema,
});
