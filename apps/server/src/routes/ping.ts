import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { db } from '@repo/database';
import { usersTable } from '@repo/database/schema/index';

export const ping = new Hono()
  .get('/ping', c => {
    return c.json({
      status: 'success',
      message: 'pong',
    });
  })
  .get('/throw', async c => {
    const users = await db.select().from(usersTable);

    if (users.length === 0) {
      throw new HTTPException(400, { message: 'I wrote shitty code' });
    }

    return c.json({
      status: 'success',
      users,
    });
  });
