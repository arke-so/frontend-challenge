<script context="module" lang="ts">
  export type NavLink = {
    label: string
    href: string
    routeId: string
    visible: boolean
    exact?: boolean
    icon?: any
  }
</script>

<script lang="ts">
  import { page } from '$app/stores'
  import { isCurrentRoute } from '$utils/routes'

  export let href: string
  export let routeId: string
  export let exact: boolean = true
  export let usePathname: boolean = false

  function matcher(page: { url: URL; route: { id: string | null } }) {
    if (usePathname) return exact ? page.url.pathname === href : page.url.pathname.startsWith(href)
    else if (exact) return isCurrentRoute(page.route.id, routeId)
    else return page.route.id?.startsWith(routeId)
  }

  $: active = matcher($page)
</script>

<slot {active} />
