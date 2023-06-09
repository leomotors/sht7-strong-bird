<script lang="ts">
  import { goto } from '$app/navigation';
  import type { PageData } from './$types';
  import Quiz from './Quiz.svelte';

  export let data: PageData;

  let currentQuestion = 0;
  let selections = Array(data.quiz.questions.length).fill('');

  $: ({ question, choices } = data.quiz.questions[currentQuestion]);

  async function handleSubmit() {
    const { correct, code } = (await fetch(`/quiz/${data.id}`, {
      method: 'POST',
      body: JSON.stringify(selections),
    }).then((r) => r.json())) as
      | { correct: true; code: string }
      | { correct: false; code: never };

    if (correct) {
      goto(`/quiz/${data.id}/correct?code=${code}`);
    } else {
      goto(`/quiz/${data.id}/incorrect`);
    }
  }
</script>

<main class="flex flex-col gap-4 p-8 items-center">
  <h1 class="font-bold text-3xl">{data.quiz.name}</h1>

  <div class="my-8 flex flex-col gap-4">
    <Quiz
      question="ข้อที่ {currentQuestion + 1}. {question}"
      {choices}
      bind:selection={selections[currentQuestion]}
    />

    <div class="buttons">
      <button
        on:click={() => (currentQuestion = Math.max(0, currentQuestion - 1))}
      >
        Back
      </button>
      <button
        on:click={() =>
          (currentQuestion = Math.min(
            data.quiz.questions.length - 1,
            currentQuestion + 1
          ))}
      >
        Next
      </button>
      <button
        on:click={() => handleSubmit()}
        disabled={selections.includes('')}
      >
        Submit
      </button>
    </div>
  </div>
</main>

<style lang="scss">
  .buttons {
    @apply flex justify-center gap-2;

    & > button {
      @apply select-none rounded-lg bg-gray-100 px-4 py-2 transition-colors enabled:hover:bg-gray-200;
    }

    & > button:last-child {
      @apply enabled:bg-blue-500 enabled:hover:bg-blue-600 disabled:cursor-not-allowed;
    }
  }
</style>
