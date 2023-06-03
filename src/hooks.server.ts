import type { Handle } from '@sveltejs/kit';

import { userKey } from '$lib/cookie';
import { prisma } from '$lib/db';

export const handle = (async ({ event, resolve }) => {
  const cookies = event.cookies;

  const userId = cookies.get(userKey);

  if (!userId) {
    const newUser = await prisma.user.create({ data: {} });

    event.locals.userId = newUser.id;
  } else {
    event.locals.userId = userId;
  }

  cookies.set(userKey, event.locals.userId, { path: '/' });

  return resolve(event);
}) satisfies Handle;
