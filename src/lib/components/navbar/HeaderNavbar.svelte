<script lang="ts">
  import { navbarHidden } from '$stores/app'
  import { onMount } from 'svelte'

  export let fixed: boolean = false

  onMount(() => {
    navbarHidden.set(true)

    return () => navbarHidden.set(false)
  })
</script>

<nav class:fixed class="left-0 top-0 z-40 flex h-navigation w-full items-center gap-4 border-b bg-background px-4">
  <slot />
</nav>
