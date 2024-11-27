<script lang="ts">
  import { Navbar } from '$components/navbar'
  import type { NavLink } from '$components/utils/NavLinkUtil.svelte'
  import NavLinkUtil from '$components/utils/NavLinkUtil.svelte'
  import { IcoNoir } from '$ds/components/icons/iconoir'
  import { appRootRoute, appRootRouteId, usersRoute, usersRouteId } from '$utils/routes'
  import '@fontsource-variable/inter'
  import '../app.css'

  const MENU_ITEMS: Array<NavLink> = [
    {
      label: 'Home',
      href: appRootRoute(),
      routeId: appRootRouteId(),
      visible: true,
      exact: true,
    },
    {
      label: 'Users',
      href: usersRoute(),
      routeId: usersRouteId(),
      visible: true,
      exact: true,
    },
  ]
</script>

<title>Arke</title>

<Navbar.Header fixed>
  <div class="flex w-full items-center justify-between">
    <div>
      <IcoNoir.ArkeLogoOnly class="w-[30px]" />
      <span class="sr-only">Arke</span>
    </div>

    <nav class="hidden lg:flex">
      <ul class="hidden flex-col gap-6 text-lg lg:flex lg:flex-row lg:items-center lg:gap-3 lg:text-sm">
        {#each MENU_ITEMS as { label, href, routeId, visible, exact } (href)}
          <li>
            {#if visible}
              <NavLinkUtil {href} {routeId} {exact} let:active>
                <a
                  {href}
                  class="flex flex-none items-center gap-1.5 rounded-md px-3 py-1.5 font-normal transition-colors hover:bg-stone-100 hover:text-foreground dark:hover:bg-secondary {active
                    ? 'bg-stone-100 hover:bg-stone-100 dark:bg-secondary dark:hover:bg-secondary'
                    : ''}">
                  {label}
                </a>
              </NavLinkUtil>
            {/if}
          </li>
        {/each}
      </ul>
    </nav>

    <div class="w-12" />
  </div>
</Navbar.Header>

<slot />
