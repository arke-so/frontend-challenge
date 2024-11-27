<script lang="ts">
  export let topnav: boolean = false
  export let bottomnav: boolean = false
  export let subnav: boolean = false
  export let flush: boolean = false

  function getHeightClass(hasTopNav: boolean, hasBottomNav: boolean, hasSubnav: boolean) {
    if (hasTopNav && hasBottomNav && hasSubnav) return 'h-[calc(100vh_-_theme(spacing.44))]'
    else if ((hasTopNav && hasBottomNav) || (hasTopNav && hasSubnav) || (hasSubnav && hasBottomNav))
      return 'h-[calc(100vh-_theme(spacing.28))]'
    else if (hasTopNav) return 'h-[calc(100vh-_theme(spacing.14))]'
    else if (hasBottomNav) return 'h-[calc(100vh-_theme(spacing.14))]'
    else if (hasSubnav) return 'h-[calc(100vh-_theme(spacing.14))]'
    else return 'h-screen'
  }

  $: height = getHeightClass(topnav, bottomnav, subnav)
</script>

<main
  class:p-4={!flush}
  class:md:p-12={!flush}
  class="flex {height} mt-4 flex-col gap-4 overflow-auto md:gap-7 {$$restProps.class || ''}">
  <slot />
</main>
