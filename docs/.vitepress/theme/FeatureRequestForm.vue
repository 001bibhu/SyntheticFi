<script setup lang="ts">
import { ref } from 'vue'
import { submitFeatureRequest } from '../utils/analytics'

const name = ref('')
const email = ref('')
const title = ref('')
const category = ref('Dashboard')
const description = ref('')
const submitted = ref(false)
const requestId = ref('')

const categories = ['Integrations', 'Dashboard', 'API', 'Mobile', 'Reporting', 'Other']

function submit() {
  const record = submitFeatureRequest({
    name: name.value,
    email: email.value,
    title: title.value,
    category: category.value,
    description: description.value,
  })
  requestId.value = record.id.slice(-8).toUpperCase()
  submitted.value = true
}
</script>

<template>
  <div class="sf-feature-form">
    <div v-if="submitted" class="sf-form-success">
      <strong>Feature request received.</strong>
      Reference: <code>#FR-{{ requestId }}</code>
      <p>Our product team reviews submissions within 5 business days.</p>
    </div>

    <form v-else @submit.prevent="submit">
      <div class="sf-form-row">
        <label>
          Name
          <input v-model="name" required type="text" />
        </label>
        <label>
          Email
          <input v-model="email" required type="email" />
        </label>
      </div>
      <div class="sf-form-row">
        <label>
          Title
          <input v-model="title" required type="text" placeholder="Short name for your idea" />
        </label>
        <label>
          Category
          <select v-model="category">
            <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
          </select>
        </label>
      </div>
      <label>
        Description
        <textarea
          v-model="description"
          required
          rows="5"
          placeholder="What problem does this solve? Who benefits?"
        />
      </label>
      <button type="submit" class="sf-btn-primary">Submit feature request</button>
    </form>
  </div>
</template>
