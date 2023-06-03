<script lang="ts">
  import { page } from '$app/stores';
</script>

{#if $page.error?.message === 'Not Found'}
  <p>You found a secret ticket!</p>
  <button
    on:click={() => {
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }}
  >
    Click here
  </button>
{:else}
  {$page.error?.message ?? 'Unknown Error'}
{/if}
