<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3'

const form = useForm({
  email: '',
  password: '',
  remember: false,
})

const submit = () => {
  form.post(route('login'))
}
</script>

<template>
  <Head title="Login" />

  <v-app class="d-flex align-center justify-center fill-height">
    <v-card width="420" class="pa-8 elevation-8 rounded-xl">

      <h2 class="text-h5 mb-6 text-center font-weight-bold">
        Able Pro Login
      </h2>

      <v-form @submit.prevent="submit">

        <v-text-field
          v-model="form.email"
          label="Email"
          type="email"
          variant="outlined"
          class="mb-4"
        />

        <v-text-field
          v-model="form.password"
          label="Password"
          type="password"
          variant="outlined"
          class="mb-4"
        />

        <v-checkbox
          v-model="form.remember"
          label="Remember me"
        />

        <v-btn
          type="submit"
          block
          color="primary"
          :loading="form.processing"
        >
          Login
        </v-btn>

        <p v-if="form.errors.email" class="text-error mt-2">
          {{ form.errors.email }}
        </p>

      </v-form>

    </v-card>
  </v-app>
</template>
