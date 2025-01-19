import { defineConfig } from 'drizzle-kit';

const dbUrl = process.env.DATABASE_URL!;

export default defineConfig({
  out: './migrations',
  schema: './src/schema',
  dialect: 'postgresql',
  dbCredentials: {
    url: dbUrl,
  },
});
