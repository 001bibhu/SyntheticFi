<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import { submitFeedback } from '../utils/analytics'

const { page } = useData()
const open = ref(false)
const vote = ref<'up' | 'down' | null>(null)
const comment = ref('')
const submitted = ref(false)

function isHome() {
  return page.value.filePath === 'index.md' || page.value.filePath === 'admin/analytics.md'
}

function submit() {
  if (!vote.value || typeof window === 'undefined') return
  submitFeedback({
    page: window.location.pathname,
    pageTitle: document.title,
    vote: vote.value,
    comment: comment.value.trim(),
  })
  submitted.value = true
  open.value = false
}

function reset() {
  vote.value = null
  comment.value = ''
  submitted.value = false
}
</script>

<template>
  <div v-if="!isHome()" class="sf-feedback" aria-label="Page feedback">
    <button
      v-if="!open && !submitted"
      class="sf-feedback-toggle"
      type="button"
      aria-label="Open feedback"
      @click="open = true"
    >
      <span class="sf-feedback-icon">💬</span>
      Feedback
    </button>

    <div v-if="open" class="sf-feedback-panel">
      <p class="sf-feedback-title">Was this page helpful?</p>
      <div class="sf-feedback-votes">
        <button
          type="button"
          :class="{ active: vote === 'up' }"
          aria-label="Helpful"
          @click="vote = 'up'"
        >
          👍
        </button>
        <button
          type="button"
          :class="{ active: vote === 'down' }"
          aria-label="Not helpful"
          @click="vote = 'down'"
        >
          👎
        </button>
      </div>
      <textarea
        v-model="comment"
        rows="3"
        placeholder="Tell us what worked or what we can improve…"
        aria-label="Feedback comment"
      />
      <div class="sf-feedback-actions">
        <button type="button" class="primary" :disabled="!vote" @click="submit">Send</button>
        <button type="button" class="ghost" @click="open = false">Cancel</button>
      </div>
    </div>

    <div v-if="submitted && !open" class="sf-feedback-thanks">
      Thanks for your feedback!
      <button type="button" class="link" @click="reset">Send another</button>
    </div>
  </div>
</template>
