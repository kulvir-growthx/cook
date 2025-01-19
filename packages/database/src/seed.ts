import { usersTable } from '@/schema/users';
import { jobsTable } from '@/schema/jobs';

import { db } from '.';

async function main() {
  console.log('starting the seeding!!!');

  await db.insert(usersTable).values({
    firstName: 'MyUser',
    email: 'user.op@skill-issues.gg',
    age: 69,
  });

  await db.insert(jobsTable).values({
    role: 'HTMX Engineer',
    location: 'At your own convenience convenience',
  });
}

main()
  .then(() => {
    console.log('seeding completed!!!');
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => process.exit());
