import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
  if (params.id.length === 1 && 'AB'.includes(params.id)) {
    return {
      id: params.id,
    };
  }

  throw error(404, 'Not found');
}) satisfies PageLoad;
