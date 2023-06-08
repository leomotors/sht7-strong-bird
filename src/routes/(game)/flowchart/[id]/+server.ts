import { error, json, type RequestHandler } from '@sveltejs/kit';

import solutionA from '$data/a.out';
import solutionB from '$data/b.out';
import { prisma } from '$lib/db';

const solA = solutionA
  .trim()
  .split('\n')
  .map((s) => +s.trim());
const solB = solutionB
  .trim()
  .split('\n')
  .map((s) => +s.trim());

function checkSol(sol: number[], answer: number[]) {
  if (sol.length !== answer.length) return false;

  for (let i = 0; i < sol.length; i++) {
    if (sol[i] !== answer[i]) return false;
  }

  return true;
}

function checkAnswer(id: string, answer: number[]) {
  if (id === 'A') {
    return checkSol(solA, answer);
  } else if (id === 'B') {
    return checkSol(solB, answer);
  } else {
    throw error(500, 'Internal server error');
  }
}

export const POST = (async ({ params, request }) => {
  const id = params.id;

  if (!id || id.length !== 1 || !'AB'.includes(id)) {
    throw error(404, 'Not found');
  }

  const answers = await request.json();

  if (!answers || !Array.isArray(answers)) {
    throw error(400, 'Bad request');
  }

  if (checkAnswer(id, answers)) {
    const ticket = await prisma.ticket.findFirstOrThrow({
      where: {
        challengeId: 'flowchart',
        name: id,
      },
    });

    await prisma.ticket.update({
      where: { code: ticket.code },
      data: { exposed: true },
    });

    return json({
      correct: true,
      code: ticket.code,
    });
  } else {
    return json({
      correct: false,
      code: null,
    });
  }
}) satisfies RequestHandler;
