import { error } from '@sveltejs/kit';

export function isGoodSlug(
  slug: string | undefined,
  params: string
): slug is string {
  return slug?.length === 1 && params.includes(slug);
}

export function assertSlug(slug: string, params: string) {
  if (isGoodSlug(slug, params)) {
    return {
      id: slug,
    };
  }

  throw error(404, 'Not found');
}
