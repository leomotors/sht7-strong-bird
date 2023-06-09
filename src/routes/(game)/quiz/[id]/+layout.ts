import { assertSlug } from '$lib/slug';
import type { LayoutLoad } from './$types';

export const load = (({ params }) => {
  return assertSlug(params.id, 'AB');
}) satisfies LayoutLoad;
