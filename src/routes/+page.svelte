<script lang="ts">
  import { page } from '$app/stores';

  import type { PageData } from './$types';
  import TicketStatus from './TicketStatus.svelte';

  export let data: PageData;
</script>

<main class="flex flex-col items-center gap-4 p-16 text-center">
  <h1 class="font-bold text-3xl">sht7 strong bird</h1>
  <h2 class="font-bold text-2xl">only the strong shall achieve the ticket</h2>

  <p>
    Choose any challenge from below. If ticket's status is secured, it mean no
    one have seen the code yet.
  </p>

  <div class="flex flex-col gap-8 my-8 items-center">
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

      <TicketStatus exposed={undefined} />
    </section>

    <section>
      <a href="/quiz">
        <button>Stupid Quiz (3 Tickets)</button>
      </a>

      <TicketStatus label="Quiz A" exposed={data.tickets.quiz_A} />
      <TicketStatus label="Quiz B" exposed={data.tickets.quiz_B} />
      <TicketStatus label="Quiz C" exposed={data.tickets.quiz_C} />
    </section>

    <section>
      <a
        href="https://github.com/SaltyAom/sht7-magical-music-maid-cafe"
        target="_blank"
        rel="noreferrer"
      >
        <button>Magical Music Maid Cafe by SaltyAom (2 Tickets)</button>
      </a>

      <TicketStatus exposed={undefined} />
    </section>
  </div>
</main>

<style lang="scss">
  section {
    @apply flex w-full flex-col items-center gap-2;
  }

  button {
    @apply rounded-lg bg-blue-300 p-4 font-bold;
  }
</style>
