<script lang="ts">
  import NavLinkUtil from '$components/utils/NavLinkUtil.svelte'

  export let route: string
  export let routeId: string
  export let disabled: boolean = false
  export let usePathname: boolean = false
</script>

<NavLinkUtil href={route} {routeId} {usePathname} let:active>
  <a
    href={route}
    class="flex border-b-2 px-4 py-4 {$$restProps.class || ''}"
    class:opacity-40={disabled}
    class:cursor-default={disabled}
    class:border-stone-400={active}>
    <slot />
  </a>
</NavLinkUtil>
