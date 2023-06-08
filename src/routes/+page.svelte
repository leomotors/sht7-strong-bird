<script lang="ts">
  import { page } from '$app/stores';

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
    <div>
      <a href="/{ticket.gameId}">
        <button>
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

  <div>
    <a href="/chips">
      <button>CHIPS Challenge</button>
    </a>
  </div>

  <p>Your User Id (=== Your Password) = {$page.data.userId}</p>
</main>

<style lang="scss">
  main > div {
    @apply flex items-center justify-between gap-4;
  }

  button {
    @apply w-64 rounded-lg bg-blue-300 p-4 font-bold;
  }
</style>
