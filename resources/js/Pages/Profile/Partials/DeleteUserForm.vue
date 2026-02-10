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
        <div class="mb-6">
            <h3 class="text-h6 text-error">Danger zone</h3>
            <p class="text-medium-emphasis">
                Once your account is deleted, all resources and data will be permanently removed.
            </p>
        </div>

        <!-- Delete button -->
        <v-btn color="error" variant="tonal" @click="confirmUserDeletion">
            Delete account
        </v-btn>

        <!-- Dialog -->
        <v-dialog v-model="confirmingUserDeletion" max-width="500">
            <v-card>

                <v-card-title class="text-error">
                    Delete account permanently?
                </v-card-title>

                <v-card-text class="d-flex flex-column ga-4">

                    <v-alert type="warning" variant="tonal">
                        This action cannot be undone.
                    </v-alert>

                    <v-text-field v-model="form.password" label="Confirm your password" type="password"
                        variant="outlined" prepend-inner-icon="mdi-lock-alert" :error-messages="form.errors.password"
                        @keyup.enter="deleteUser" />

                </v-card-text>

                <v-card-actions class="justify-end ga-2">

                    <v-btn variant="text" @click="closeModal">
                        Cancel
                    </v-btn>

                    <v-btn color="error" :loading="form.processing" @click="deleteUser">
                        Delete permanently
                    </v-btn>

                </v-card-actions>

            </v-card>
        </v-dialog>
    </section>
</template>
