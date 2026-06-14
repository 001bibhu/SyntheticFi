<script setup lang="ts">
import { ref, provide, onMounted, onBeforeUnmount } from 'vue'

const openId = ref<string | null>(null)

function toggle(id: string) {
  openId.value = openId.value === id ? null : id
}

function openFromHash() {
  const hash = decodeURIComponent(window.location.hash.slice(1))
  if (hash) {
    openId.value = hash
  }
}

onMounted(() => {
  openFromHash()
  window.addEventListener('hashchange', openFromHash)
})

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', openFromHash)
})

provide('sf-accordion', {
  openId,
  toggle,
})
</script>

<template>
  <div class="sf-accordion">
    <slot />
  </div>
</template>

<style scoped>
.sf-accordion {
  margin: 1.25rem 0 1.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  background: var(--vp-c-bg);
}
</style>
