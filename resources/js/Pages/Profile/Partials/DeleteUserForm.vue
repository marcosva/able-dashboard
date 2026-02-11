<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import { ref } from 'vue'

const confirmingUserDeletion = ref(false)

const form = useForm({
    password: '',
})

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true
}

const deleteUser = () => {
    form.delete(route('profile.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onFinish: () => form.reset(),
    })
}

const closeModal = () => {
    confirmingUserDeletion.value = false
    form.clearErrors()
    form.reset()
}
</script>

<template>
  <section>

    <!-- Header -->
    <div class="mb-4">
      <h3 class="text-body-1 font-weight-medium mb-2 text-medium">
        Danger zone
      </h3>

      <p class="text-body-2 text-medium-emphasis">
        Once your account is deleted, all resources and data will be permanently removed.
      </p>
    </div>

    <!-- Delete button -->
    <v-btn
      color="error"
      variant="tonal"
      size="small"
      @click="confirmUserDeletion"
    >
      Delete account
    </v-btn>

    <!-- Dialog -->
    <v-dialog
      v-model="confirmingUserDeletion"
      max-width="420"
    >
      <v-card class="pa-4">

        <!-- Title -->
        <v-card-title class="text-subtitle-1 font-weight-medium text-error pa-0 mb-2">
          Delete account permanently?
        </v-card-title>

        <!-- Content -->
        <v-card-text class="d-flex flex-column ga-3 pa-0">

          <v-alert
            type="warning"
            variant="tonal"
            density="compact"
            class="text-body-2"
          >
            This action cannot be undone.
          </v-alert>

          <v-text-field
            v-model="form.password"
            label="Confirm your password"
            type="password"
            variant="outlined"
            density="compact"
            hide-details="auto"
            prepend-inner-icon="mdi-lock-alert"
            :error-messages="form.errors.password"
            @keyup.enter="deleteUser"
          />

        </v-card-text>

        <!-- Actions -->
        <v-card-actions class="justify-end ga-2 mt-3 pa-0">

          <v-btn
            variant="text"
            size="small"
            @click="closeModal"
          >
            Cancel
          </v-btn>

          <v-btn
            color="error"
            size="small"
            :loading="form.processing"
            @click="deleteUser"
          >
            Delete permanently
          </v-btn>

        </v-card-actions>

      </v-card>
    </v-dialog>

  </section>
</template>

