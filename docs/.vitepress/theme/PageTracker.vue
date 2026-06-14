<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import { trackPageView } from '../utils/analytics'

const route = useRoute()

function track() {
  if (typeof window === 'undefined') return
  const path = route.path.replace(/\.html$/, '') || '/'
  if (path !== '/' && !path.includes('/admin/analytics')) {
    trackPageView(path)
  }
}

onMounted(track)
watch(() => route.path, track)
</script>

<template>
  <span aria-hidden="true" style="display: none" />
</template>
