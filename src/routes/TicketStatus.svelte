<script lang="ts">
  export let label: string = '';
  export let exposed: boolean | undefined;

  $: clsx =
    exposed === true
      ? 'border-yellow-500 bg-yellow-200'
      : exposed === false
      ? 'border-green-500 bg-green-200'
      : 'border-gray-500 bg-gray-200';

  $: status =
    exposed === true
      ? 'EXPOSED'
      : exposed === false
      ? 'Secured'
      : 'Ticket status report not available in this challenge';
</script>

<p class="p-3 rounded-lg border w-fit {clsx}">
  {label ? `${label}: ` : ''}
  {status}
</p>
