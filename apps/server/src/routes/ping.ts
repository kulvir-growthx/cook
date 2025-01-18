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
    if ('a' === 'a') {
      throw new HTTPException(500, { message: 'I wrote shitty code' });
    }

    const res = await db.select().from(usersTable);
    console.log(res);

    return c.json({
      status: 'success',
    });
  });
