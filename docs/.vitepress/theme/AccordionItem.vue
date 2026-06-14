<script setup lang="ts">
import { inject, computed, useId, type Ref } from 'vue'

const props = defineProps<{
  title: string
  id?: string
}>()

const autoId = useId()
const itemId = computed(() => props.id ?? autoId)

const accordion = inject<{
  openId: Ref<string | null>
  toggle: (id: string) => void
}>('sf-accordion')

const isOpen = computed(() => accordion?.openId.value === itemId.value)

function onToggle() {
  accordion?.toggle(itemId.value)
}
</script>

<template>
  <div class="sf-accordion-item" :class="{ open: isOpen }" :id="itemId">
    <button
      type="button"
      class="sf-accordion-trigger"
      :aria-expanded="isOpen"
      :aria-controls="`panel-${itemId}`"
      @click="onToggle"
    >
      <span class="sf-accordion-title">{{ title }}</span>
      <span class="sf-accordion-icon" aria-hidden="true">{{ isOpen ? '−' : '+' }}</span>
    </button>
    <div
      v-show="isOpen"
      :id="`panel-${itemId}`"
      class="sf-accordion-panel"
      role="region"
      :aria-label="title"
    >
      <div class="sf-accordion-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.sf-accordion-item {
  border-bottom: 1px solid var(--vp-c-divider);
  scroll-margin-top: calc(var(--vp-nav-height, 64px) + 1rem);
}

.sf-accordion-item:last-child {
  border-bottom: none;
}

.sf-accordion-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  padding: 1rem 1.25rem;
  border: none;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 0.9375rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.sf-accordion-trigger:hover {
  background: var(--vp-c-bg);
  color: var(--sf-brand, #0392f1);
}

.sf-accordion-item.open .sf-accordion-trigger {
  background: var(--vp-c-bg);
  color: var(--sf-brand, #0392f1);
  border-bottom: 1px solid var(--vp-c-divider);
}

.sf-accordion-title {
  flex: 1;
}

.sf-accordion-icon {
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-2);
  font-size: 1.125rem;
  line-height: 1;
}

.sf-accordion-item.open .sf-accordion-icon {
  background: rgba(3, 146, 241, 0.12);
  color: var(--sf-brand, #0392f1);
}

.sf-accordion-content {
  padding: 0.25rem 1.25rem 1.15rem;
  color: var(--vp-c-text-2);
  font-size: 0.9375rem;
  line-height: 1.65;
}

.sf-accordion-content :deep(p) {
  margin: 0;
}
</style>
