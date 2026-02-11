<script setup lang="ts">
import { useForm, usePage, Link } from '@inertiajs/vue3'

defineProps<{
    mustVerifyEmail?: boolean
    status?: string
}>()

const user = usePage().props.auth.user

const form = useForm({
    name: user.name,
    email: user.email,
})

const submit = () => {
    form.patch(route('profile.update'))
}
</script>



<template>
  <section>

    <!-- descripción -->
    <div class="mb-4">
        <h3 class="text-body-1 font-weight-medium mb-2 text-medium">Profile information</h3>
      <p class="text-body-2 text-medium-emphasis">
        Update your account's profile information and email address.
      </p>
    </div>

    <v-form @submit.prevent="submit" class="d-flex flex-column ga-8">

      <!-- Name -->
      <v-text-field
        v-model="form.name"
        label="Name"
        prepend-inner-icon="mdi-account"
        variant="outlined"
        density="compact"
        hide-details="auto"
        :error-messages="form.errors.name"
      />

      <!-- Email -->
      <v-text-field
        v-model="form.email"
        label="Email"
        type="email"
        prepend-inner-icon="mdi-email"
        variant="outlined"
        density="compact"
        hide-details="auto"
        :error-messages="form.errors.email"
      />

      <!-- Verify email -->
      <v-alert
        v-if="mustVerifyEmail && user.email_verified_at === null"
        type="warning"
        variant="tonal"
        density="compact"
        class="text-body-2"
      >
        Your email address is unverified.

        <Link
          :href="route('verification.send')"
          method="post"
          as="button"
          class="ml-2 text-primary text-decoration-underline"
        >
          Re-send verification
        </Link>
      </v-alert>

      <!-- Success -->
      <v-alert
        v-if="status === 'verification-link-sent'"
        type="success"
        variant="tonal"
        density="compact"
        class="text-body-2"
      >
        Verification link sent successfully.
      </v-alert>

      <!-- Actions -->
      <div class="d-flex align-center ga-3 mt-2">

        <v-btn
          type="submit"
          color="primary"
          size="small"
          :loading="form.processing"
        >
          Save
        </v-btn>

        <span
          v-if="form.recentlySuccessful"
          class="text-success text-body-2"
        >
          Saved ✓
        </span>

      </div>

    </v-form>
  </section>
</template>


