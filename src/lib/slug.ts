import { error } from '@sveltejs/kit';

export function assertSlug(slug: string, params: string) {
  if (slug.length === 1 && params.includes(slug)) {
    return {
      id: slug,
    };
  }

  throw error(404, 'Not found');
}
