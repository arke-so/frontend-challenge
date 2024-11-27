<script lang="ts">
  export let flush: boolean = false
</script>

<div
  class="cell table-cell border border-b-0 border-r-0 border-stone-200 align-middle first:border-l-0 group-last:border-b group-first-of-type:border-t-0 dark:border-stone-700 {$$restProps.class ||
    ''}"
  class:px-2={!flush}>
  <slot />
</div>
