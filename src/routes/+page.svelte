<script lang="ts">
  import { page } from '$app/stores';

  import type { PageData } from './$types';
  import TicketStatus from './TicketStatus.svelte';

  export let data: PageData;

  console.log({ data });
</script>

<main class="flex flex-col items-center gap-4 p-16 text-center">
  <h1 class="font-bold text-3xl">sht7 strong bird</h1>
  <h2 class="font-bold text-2xl">only the strong shall achieve the ticket</h2>

  <p class="mb-8">
    Choose any challenge from below. If ticket's status is secured, it mean no
    one have seen the code yet.
  </p>

  <section>
    <a href="/flowchart">
      <button>Flowchart นรก (2 Tickets)</button>
    </a>

    <TicketStatus label="Flowchart A" exposed={data.tickets.flowchart_A} />
    <TicketStatus label="Flowchart B" exposed={data.tickets.flowchart_B} />
  </section>

  <section>
    <a href="/chips">
      <button>CHIPS Challenge (??? Tickets)</button>
    </a>
  </section>

  <p class="mt-8">Your User Id (=== Your Password) = {$page.data.userId}</p>
</main>

<style lang="scss">
  section {
    @apply flex w-full flex-col items-center gap-2;
  }

  button {
    @apply rounded-lg bg-blue-300 p-4 font-bold;
  }
</style>
