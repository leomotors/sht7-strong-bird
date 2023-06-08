import type { PageServerLoad } from './$types';
import { prisma } from '$lib/db';

export const load = (async () => {
  const tickets = await prisma.ticket.findMany({
    include: {
      challenge: true,
    },
  });

  const processed = tickets.reduce((prev, curr) => {
    return {
      ...prev,
      [curr.challenge.challengeId + '_' + curr.name]: curr.exposed,
    };
  }, {} as Record<string, boolean>);

  return {
    tickets: processed,
  };
}) satisfies PageServerLoad;
