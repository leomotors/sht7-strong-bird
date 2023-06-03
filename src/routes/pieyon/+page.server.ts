import { prisma } from '$lib/db';
import { redirect, type ServerLoad } from '@sveltejs/kit';

export const load = (async ({ locals }) => {
  const completed =
    (
      await prisma.pieyon.findUnique({
        where: { userId: locals.userId },
      })
    )?.completed ?? false;

  if (completed) {
    throw redirect(302, '/pieyon/complete');
  }
}) satisfies ServerLoad;
