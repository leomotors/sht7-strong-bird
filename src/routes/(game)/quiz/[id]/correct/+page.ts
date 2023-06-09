import type { Load } from '@sveltejs/kit';

export const load = (({ url }) => {
  return {
    code: url.searchParams.get('code') ?? '',
  };
}) satisfies Load;
