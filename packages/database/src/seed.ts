import { seed } from 'drizzle-seed';

import { db } from './index';
import { usersTable } from '@/schema/users';
import { jobsTable } from '@/schema/jobs';

async function main() {
  console.log('starting the seeding');
  await seed(db, { usersTable, jobsTable }, { count: 2 });
}

main()
  .then(() => {
    console.log('seeding done!!!');
  })
  .catch(err => {
    console.log('some error in seeding the database');
    console.log(err);
    process.exit(1);
  })
  .finally(() => {
    process.exit(0);
  });
