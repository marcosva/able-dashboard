<script setup lang="ts">
import AppLayout from '@/Layouts/AppLayout.vue'
import DeleteUserForm from './Partials/DeleteUserForm.vue'
import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue'
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue'
import { Head } from '@inertiajs/vue3'

defineOptions({
    layout: AppLayout, // 👈 mismo que Dashboard
})

defineProps<{
    mustVerifyEmail?: boolean
    status?: string
}>()
</script>

<template>

    <Head title="Profile" />

    <v-container class="py-8" max-width="900">

        <v-row class="ga-6">

            <v-col cols="12">
                <v-card class="pa-6">
                    <h3 class="text-h6 mb-4">Profile information</h3>
                    <UpdateProfileInformationForm :must-verify-email="mustVerifyEmail" :status="status" />
                </v-card>
            </v-col>

            <v-col cols="12">
                <v-card class="pa-6">
                    <h3 class="text-h6 mb-4">Change password</h3>
                    <UpdatePasswordForm />
                </v-card>
            </v-col>

            <v-col cols="12">
                <v-card color="error" variant="tonal" class="pa-6">
                    <h3 class="text-h6 mb-4">Danger zone</h3>
                    <DeleteUserForm />
                </v-card>
            </v-col>

        </v-row>
    </v-container>
</template>
