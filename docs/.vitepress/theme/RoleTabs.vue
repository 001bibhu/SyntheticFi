<script setup lang="ts">
import { ref, computed } from 'vue'

export interface RoleTabItem {
  id: string
  label: string
}

const props = withDefaults(
  defineProps<{
    items?: RoleTabItem[]
    ariaLabel?: string
  }>(),
  {
    items: () => [
      { id: 'advisors', label: 'For financial advisors' },
      { id: 'investors', label: 'For individual investors' },
    ],
    ariaLabel: 'Content by role',
  },
)

const active = ref(props.items[0]?.id ?? '')

const gridStyle = computed(() => ({
  gridTemplateColumns: `repeat(${props.items.length}, minmax(0, 1fr))`,
}))
</script>

<template>
  <div class="sf-role-tabs">
    <div class="sf-role-tabs-bar" role="tablist" :aria-label="ariaLabel" :style="gridStyle">
      <button
        v-for="tab in items"
        :key="tab.id"
        type="button"
        role="tab"
        class="sf-role-tab"
        :class="{ active: active === tab.id }"
        :aria-selected="active === tab.id"
        @click="active = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>
    <div
      v-for="tab in items"
      :key="tab.id"
      v-show="active === tab.id"
      :id="`sf-tab-${tab.id}`"
      class="sf-role-tabs-panel"
      role="tabpanel"
    >
      <slot :name="tab.id" />
    </div>
  </div>
</template>

<style scoped>
.sf-role-tabs {
  margin: 1.75rem 0 2rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  background: var(--vp-c-bg);
}

.sf-role-tabs-bar {
  display: grid;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.sf-role-tab {
  padding: 0.85rem 0.75rem;
  border: none;
  border-bottom: 2px solid transparent;
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: color 0.15s, background 0.15s, border-color 0.15s;
  line-height: 1.3;
}

.sf-role-tab + .sf-role-tab {
  border-left: 1px solid var(--vp-c-divider);
}

.sf-role-tab:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
}

.sf-role-tab.active {
  color: var(--sf-brand, #0392f1);
  border-bottom-color: var(--sf-brand, #0392f1);
  background: var(--vp-c-bg);
}

.sf-role-tabs-panel {
  padding: 1.25rem 1.5rem 1.5rem;
}

.sf-role-tabs-panel :deep(> :first-child) {
  margin-top: 0;
}

.sf-role-tabs-panel :deep(h3:first-child) {
  margin-top: 0;
}

@media (max-width: 640px) {
  .sf-role-tabs-bar {
    grid-template-columns: 1fr !important;
  }

  .sf-role-tab + .sf-role-tab {
    border-left: none;
    border-top: 1px solid var(--vp-c-divider);
  }
}
</style>
