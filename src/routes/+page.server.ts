import type { PageServerLoad } from './$types';
import { prisma } from '$lib/db';

export const load = (async () => {
  const tickets = await prisma.ticket.findMany();
  const publicTickets = tickets.map((ticket) => ({
    gameId: ticket.gameId,
    title: ticket.title,
    exposed: ticket.exposed,
  }));

  return {
    tickets: publicTickets,
  };
}) satisfies PageServerLoad;
