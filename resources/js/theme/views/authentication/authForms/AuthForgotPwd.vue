<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'

const form = useForm({
  email: ''
})

const submit = () => {
  form.post(route('password.email'))
}
</script>

<template>
  <v-form @submit.prevent="submit" class="mt-7 loginForm">

    <v-label>Email address</v-label>

    <v-text-field
      v-model="form.email"
      placeholder="Enter email address"
      class="mt-2 mb-6"
      density="comfortable"
      hide-details="auto"
      variant="outlined"
      color="primary"
    />

    <div v-if="form.errors.email" class="mb-4">
      <v-alert type="error" variant="tonal">
        {{ form.errors.email }}
      </v-alert>
    </div>

    <h6 class="text-caption">
      Do not forget to check SPAM box.
    </h6>

    <v-btn
      color="primary"
      block
      class="mt-4"
      variant="flat"
      size="large"
      rounded="md"
      :loading="form.processing"
      type="submit"
    >
      Send Password Reset Email
    </v-btn>

  </v-form>
</template>
