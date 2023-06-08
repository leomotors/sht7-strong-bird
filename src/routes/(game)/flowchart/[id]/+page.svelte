<script lang="ts">
  import type { PageData } from './$types';
  import questionA from '$data/a.in';
  import questionB from '$data/b.in';

  export let data: PageData;

  $: question =
    id === 'A' ? questionA : id === 'B' ? questionB : '404 Not Found WTF';

  $: id = data.id;

  let answer = '';

  let loading = false;
  let error = '';
  let result = '';

  async function handleSubmit() {
    loading = true;

    const answersArray = answer.trim().split('\n');
    if (answersArray.length !== 100) {
      loading = false;
      error = 'Answer should be 100 lines';
      return;
    }

    const numbers = answersArray.map((line) => +line.trim());

    if (numbers.some((num) => isNaN(num))) {
      loading = false;
      error = 'All answers should be number';
      return;
    }
  }
</script>

<h1 class="font-bold text-5xl">Flowchart นรก Question {id}</h1>

<img src="/flowchart_{id}.svg" alt="Flowchart {id}" />

<section class="flex gap-4 items-start">
  <div>
    <h2>Test Cases</h2>
    <textarea value={question} rows="20" disabled />
  </div>
  <div>
    <h2>Your Answer</h2>
    <textarea bind:value={answer} rows="20" />
  </div>
</section>

{#if loading}
  <p>Loading...</p>
{:else if error}
  <p class="text-red-500">{error}</p>
{:else}
  <p>{result}</p>
{/if}

<div class="flex gap-4">
  <button
    class="rounded-lg bg-gray-100 border-2 border-gray-500 p-2 hover:bg-gray-50 transition-colors"
    on:click={() => {
      navigator.clipboard.writeText(question);
    }}
  >
    Copy Test Cases
  </button>
  <button
    class="rounded-lg bg-blue-200 border-2 border-blue-500 p-2 hover:bg-blue-100 transition-colors"
    on:click={() => handleSubmit()}
  >
    Submit
  </button>
</div>

<style lang="scss">
  section > div {
    @apply flex flex-col gap-2;

    & > h2 {
      @apply text-3xl font-bold;
    }

    & > textarea {
      @apply p-4;
    }
  }
</style>
