<script lang="ts">
  import * as Table from '$ds/components/ui/table'
  import type { FilterQuery } from '$utils/filters'
  import { _ } from 'svelte-i18n'

  let className: string

  export let currentQuery: FilterQuery | null = null
  export let message: string = $_('No Results Found')
  export let colspan: number = 4
  export { className as class }
</script>

<Table.Row class="hover:bg-transparent">
  <Table.Cell {colspan} class="py-8 text-center {className || ''}" aria-live="polite">
    {#if currentQuery?.search}
      {$_('No Results Found With Search', { values: { search: currentQuery.search } })}
    {:else}
      {message}
    {/if}
  </Table.Cell>
</Table.Row>
