<script setup lang="ts">
import RoleTabs from './RoleTabs.vue'

const audienceTabs = [
  { id: 'advisors', label: 'Financial advisors' },
  { id: 'investors', label: 'Investors' },
  { id: 'providers', label: 'Financial service providers' },
]
</script>

<template>
  <RoleTabs :items="audienceTabs" aria-label="Who uses SyntheticFi">
    <template #advisors>
      <slot name="advisors" />
    </template>
    <template #investors>
      <slot name="investors" />
    </template>
    <template #providers>
      <slot name="providers" />
    </template>
  </RoleTabs>
</template>
