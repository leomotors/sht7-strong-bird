<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  let hasFocus = true;

  onMount(() => {
    const checkFocus = setInterval(() => {
      hasFocus = document.hasFocus();
    }, 300);

    const fire = setInterval(() => {
      fireHeartbeat();
    }, 10_000);

    return () => {
      clearInterval(checkFocus);
      clearInterval(fire);
    };
  });

  async function fireHeartbeat() {
    const result = await fetch('/pieyon', {
      method: 'POST',
    }).then((r) => {
      if (r.status !== 200) {
        return { completed: false };
      } else {
        return r.json();
      }
    });

    if (result.completed) {
      goto('/pieyon/complete');
    }
  }
</script>

<h1 class="font-bold text-5xl">Watch this video for 1 hour</h1>

{#if !hasFocus}
  <p class="text-red-500 font-bold text-5xl">FOCUS ON WATCHING THIS VIDEO!</p>
{/if}

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/xS7fDseHxMQ"
  title="YouTube video player"
  frameborder="0"
  allowfullscreen
/>
