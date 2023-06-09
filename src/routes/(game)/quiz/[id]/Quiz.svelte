<script lang="ts">
  export let question: string;
  export let choices: string[];
  export let selection: string;
</script>

<div class="flex flex-col gap-4 items-center">
  <p class="font-bold text-xl">{question}</p>

  <div class="flex flex-col gap-2 items-center">
    {#each choices as choice}
      <button
        on:click={() => (selection = choice)}
        class="rounded-lg p-4 max-w-lg {selection === choice
          ? 'bg-blue-500'
          : 'bg-gray-100'}"
      >
        {choice}
      </button>
    {/each}
  </div>
</div>
