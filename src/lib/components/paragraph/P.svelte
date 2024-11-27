<script lang="ts">
  export let flush: boolean = false
</script>

<p class="text-sm" class:my-2={!flush}>
  <slot />
</p>
