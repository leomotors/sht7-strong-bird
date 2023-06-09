<script lang="ts">
  import { rickroll } from '$lib/constants';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<h1 class="font-bold text-3xl">Congratulations!</h1>

<p class="text-xl">Ticket Code: {data.code}</p>

<p class="text-xl">
  Redeem at: <a href={rickroll} target="_blank">
    https://www.eventpop.me/s/sht7
  </a>
</p>

<p class="text-red-500 font-bold text-2xl">HURRY BEFORE SOMEONE REDEEM IT!!!</p>
