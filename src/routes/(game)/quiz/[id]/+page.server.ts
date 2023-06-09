import type { PageServerLoad } from './$types';
import { getClientQuiz } from './quiz';

export const load = (({ params }) => {
  const quiz = getClientQuiz(params.id);

  return {
    quiz,
  };
}) satisfies PageServerLoad;
