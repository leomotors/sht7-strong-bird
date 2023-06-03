import { error, json, type RequestHandler } from '@sveltejs/kit';

import { prisma } from '$lib/db';

// 360 heartbeats, 10 seconds each = 1 hour
const PIEYON_GOAL = 360;

export const POST = (async ({ locals }) => {
  const { userId } = locals;

  const pieyon = await prisma.pieyon.upsert({
    where: { userId },
    create: { userId },
    update: {},
  });

  if (new Date(pieyon.lastHeartbeat).getTime() + 6900 > Date.now()) {
    // Too frequent heartbeat
    throw error(400, 'Too frequent heartbeat');
  }

  const completed = pieyon.heartbeats + 1 >= PIEYON_GOAL;

  await prisma.pieyon.update({
    where: { userId },
    data: {
      lastHeartbeat: new Date(),
      heartbeats: pieyon.heartbeats + 1,
      completed,
    },
  });

  return json({ completed });
}) satisfies RequestHandler;
