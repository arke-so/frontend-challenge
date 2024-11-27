<script lang="ts">
  export let sticky: boolean = false
</script>

<div class="table w-full align-middle text-sm {$$restProps.class || ''}">
  <div class="thead top-0 table-header-group" class:sticky>
    <slot name="thead" />
  </div>

  <slot name="tbody" />
</div>
