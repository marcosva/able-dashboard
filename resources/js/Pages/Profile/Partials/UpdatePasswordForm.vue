<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
})

const updatePassword = () => {
    form.put(route('password.update'), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset()
        },
    })
}
</script>

<template>
    <section>
        <!-- Header -->
        <div class="mb-6">
            <h3 class="text-h6">Change password</h3>
            <p class="text-medium-emphasis">
                Ensure your account is using a long, random password to stay secure.
            </p>
        </div>

        <!-- Form -->
        <v-form @submit.prevent="updatePassword" class="d-flex flex-column ga-4">

            <!-- Current password -->
            <v-text-field v-model="form.current_password" label="Current password" type="password"
                prepend-inner-icon="mdi-lock" variant="outlined" autocomplete="current-password"
                :error-messages="form.errors.current_password" />

            <!-- New password -->
            <v-text-field v-model="form.password" label="New password" type="password"
                prepend-inner-icon="mdi-lock-plus" variant="outlined" autocomplete="new-password"
                :error-messages="form.errors.password" />

            <!-- Confirm password -->
            <v-text-field v-model="form.password_confirmation" label="Confirm password" type="password"
                prepend-inner-icon="mdi-lock-check" variant="outlined" autocomplete="new-password"
                :error-messages="form.errors.password_confirmation" />

            <!-- Actions -->
            <div class="d-flex align-center ga-4 mt-2">
                <v-btn type="submit" color="primary" :loading="form.processing">
                    Save
                </v-btn>

                <span v-if="form.recentlySuccessful" class="text-success">
                    Saved ✓
                </span>
            </div>

        </v-form>
    </section>
</template>
