<script lang="ts">
  export let fixed: boolean = true
</script>

<nav class:fixed class="bottom-0 left-0 z-40 flex h-navigation w-full items-center gap-4 border-t bg-background px-4">
  <div class="flex flex-1 items-center justify-end gap-2 {$$restProps.class || ''}">
    <slot />
  </div>
</nav>
