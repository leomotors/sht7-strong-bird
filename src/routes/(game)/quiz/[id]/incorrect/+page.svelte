<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<h1 class="font-bold text-3xl">You answered wrong!</h1>

<a href="/quiz/{data.id}">
  <button class="p-4 rounded-lg bg-blue-500">Retry</button>
</a>
