import { redirect, type ServerLoad } from '@sveltejs/kit';

import { prisma } from '$lib/db';

import yellowQuiz from '$data/yellow_quiz.json';

function processQuiz(id: number) {
  const q = yellowQuiz[id];

  const questions = q.questions.map(({ question, correct, wrong }) => {
    const choices = [correct, ...wrong].sort(() => Math.random() - 0.5);
    return { question, choices };
  });

  return {
    name: q.name,
    source: q.source,
    questions,
  };
}

export const load = (async ({ locals }) => {
  const userId = locals.userId;

  // Create if not exist
  const yellow = await prisma.yellowQuiz.upsert({
    where: { userId },
    create: { userId },
    update: {},
  });

  if (yellow.completed) {
    throw redirect(302, '/yellow_quiz/complete');
  }

  const quiz = processQuiz(yellow.currentQuiz);

  return { quiz };
}) satisfies ServerLoad;
