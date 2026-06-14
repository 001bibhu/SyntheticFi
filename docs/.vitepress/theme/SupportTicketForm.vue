<script setup lang="ts">
import { ref } from 'vue'
import { submitTicket } from '../utils/analytics'

defineProps<{ compact?: boolean }>()

const name = ref('')
const email = ref('')
const category = ref('Account linking')
const subject = ref('')
const description = ref('')
const submitted = ref(false)
const ticketId = ref('')

const categories = [
  'Account linking',
  'Financing',
  'Margin',
  'Billing',
  'API',
  'Documentation',
  'Other',
]

function submit() {
  const record = submitTicket({
    name: name.value,
    email: email.value,
    category: category.value,
    subject: subject.value,
    description: description.value,
  })
  ticketId.value = record.id.slice(-8).toUpperCase()
  submitted.value = true
}
</script>

<template>
  <div :class="['sf-ticket-form', { compact }]">
    <div v-if="submitted" class="sf-form-success">
      <strong>Ticket submitted.</strong>
      Reference: <code>#SF-{{ ticketId }}</code>
      <p>We'll respond within 1 business day. Check your email for updates.</p>
    </div>

    <form v-else @submit.prevent="submit">
      <div class="sf-form-row">
        <label>
          Full name
          <input v-model="name" required type="text" placeholder="Jane Investor" />
        </label>
        <label>
          Email
          <input v-model="email" required type="email" placeholder="you@firm.com" />
        </label>
      </div>
      <div class="sf-form-row">
        <label>
          Category
          <select v-model="category">
            <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
          </select>
        </label>
        <label>
          Subject
          <input v-model="subject" required type="text" placeholder="Brief summary" />
        </label>
      </div>
      <label>
        Description
        <textarea
          v-model="description"
          required
          rows="4"
          placeholder="What happened? Include financing ID, brokerage, and steps tried."
        />
      </label>
      <button type="submit" class="sf-btn-primary">Submit support ticket</button>
    </form>
  </div>
</template>
