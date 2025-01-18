import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { HTTPException } from 'hono/http-exception';

import { ping } from '@/routes';

const app = new Hono()
  .use(logger())
  .basePath('/api')
  .basePath('v1')
  .route('/', ping)
  .onError((err, c) => {
    if (err instanceof HTTPException) {
      return err.getResponse();
    }
    c.status(500);
    return c.json({ message: err.message });
  });

export default {
  port: 3001,
  fetch: app.fetch,
};
