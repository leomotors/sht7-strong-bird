<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<main class="flex flex-col items-center gap-4 p-16 text-center">
  <h1 class="font-bold text-3xl">sht7 strong bird</h1>
  <h2 class="font-bold text-2xl">only the strong shall achieve the ticket</h2>

  <p>
    Choose any challenge from below. <b>One challenge only have One Ticket</b>
  </p>

  {#each data.tickets as ticket}
    <div class="flex items-center justify-between gap-4">
      <a href="/{ticket.gameId}">
        <button class="rounded-lg font-bold p-4 bg-blue-300 w-64">
          {ticket.title}
        </button>
      </a>
      <p
        class="p-3 rounded-lg border {ticket.exposed
          ? 'border-yellow-500 bg-yellow-200'
          : 'border-green-500 bg-green-200'}"
      >
        {ticket.exposed ? 'EXPOSED' : 'Secured'}
      </p>
    </div>
  {/each}
</main>
