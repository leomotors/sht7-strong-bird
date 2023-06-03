<script lang="ts">
  import { page } from '$app/stores';

  import { rickroll } from '$lib/constants';
</script>

<main class="flex flex-col items-center gap-4 p-16 text-center">
  {#if $page.error?.message === 'Not Found'}
    <p>You found a secret ticket!</p>
    <button
      on:click={() => {
        window.location.href = rickroll;
      }}
    >
      Click here
    </button>
  {:else}
    {$page.error?.message ?? 'Unknown Error'}
  {/if}
</main>
