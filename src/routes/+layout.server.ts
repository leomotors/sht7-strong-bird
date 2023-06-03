import type { ServerLoad } from '@sveltejs/kit';

export const load = (async ({ locals }) => {
  return {
    userId: locals.userId,
  };
}) satisfies ServerLoad;
