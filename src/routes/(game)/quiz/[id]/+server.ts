import { error, json, type RequestHandler } from '@sveltejs/kit';

import { getQuizById } from './quiz';
import { isGoodSlug } from '$lib/slug';

export const POST = (async ({ params, request }) => {
  const answers = await request.json();

  if (
    !Array.isArray(answers) ||
    answers.some((a) => typeof a !== 'string') ||
    !isGoodSlug(params.id, 'ABC')
  ) {
    throw error(400, 'Bad request');
  }

  const quiz = getQuizById(params.id);

  const keys = quiz.questions.map((q) => q.correct);

  const correct = answers.every((a, i) => a === keys[i]);

  if (correct) {
    return json({ correct: true, code: 'GEAN' });
  } else {
    return json({ correct: false });
  }
}) satisfies RequestHandler;
