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

        <div class="mb-6">
            <h3 class="text-h6">Profile information</h3>
            <p class="text-medium-emphasis">
                Update your account's profile information and email address.
            </p>
        </div>

        <v-form @submit.prevent="submit" class="d-flex flex-column ga-4">

            <!-- Name -->
            <v-text-field v-model="form.name" label="Name" prepend-inner-icon="mdi-account" variant="outlined"
                :error-messages="form.errors.name" />

            <!-- Email -->
            <v-text-field v-model="form.email" label="Email" type="email" prepend-inner-icon="mdi-email"
                variant="outlined" :error-messages="form.errors.email" />

            <!-- Verify email -->
            <v-alert v-if="mustVerifyEmail && user.email_verified_at === null" type="warning" variant="tonal">
                Your email address is unverified.

                <Link :href="route('verification.send')" method="post" as="button" class="ml-2 text-primary">
                    Re-send verification
                </Link>
            </v-alert>

            <v-alert v-if="status === 'verification-link-sent'" type="success" variant="tonal">
                Verification link sent successfully.
            </v-alert>

            <!-- Actions -->
            <div class="d-flex align-center ga-4">
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
