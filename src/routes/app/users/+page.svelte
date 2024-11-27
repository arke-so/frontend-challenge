<script lang="ts">
  import { Heading } from '$components/heading'
  import { Main } from '$components/main'
  import { Table } from '$ds/components/ui/_table'
  import type { PageData } from './$types'

  export let data: PageData

  $: ({ users } = data)
</script>

<Main.Basic topnav class="mt-navigation">
  <Heading.H2>Users</Heading.H2>

  <Table.Root>
    <svelte:fragment slot="thead">
      <Table.Head>ID</Table.Head>
      <Table.Head>Name</Table.Head>
      <Table.Head>Username</Table.Head>
    </svelte:fragment>

    <svelte:fragment slot="tbody">
      {#each users as user (user.id)}
        <Table.Row class="h-10">
          <Table.Cell>{user.id}</Table.Cell>
          <Table.Cell>{user.fullName}</Table.Cell>
          <Table.Cell>{user.username}</Table.Cell>
        </Table.Row>
      {/each}
    </svelte:fragment>
  </Table.Root>
</Main.Basic>
