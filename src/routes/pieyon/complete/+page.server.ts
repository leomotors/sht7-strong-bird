import { prisma } from '$lib/db';
import { error, type ServerLoad } from '@sveltejs/kit';

export const load = (async ({ locals }) => {
  const completed =
    (
      await prisma.pieyon.findUnique({
        where: { userId: locals.userId },
      })
    )?.completed ?? false;

  if (!completed) {
    throw error(403, 'Forbidden');
  }

  const ticket = await prisma.ticket.update({
    where: { gameId: 'pieyon' },
    data: { exposed: true },
  });

  return {
    code: ticket.code,
  };
}) satisfies ServerLoad;
