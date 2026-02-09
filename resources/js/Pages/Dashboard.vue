<script setup lang="ts">
import AppLayout from '@/Layouts/AppLayout.vue'

defineOptions({
  layout: AppLayout,
})
</script>

<template>
  <v-container>
    <v-card class="pa-6">
      <h1>Estructura base lista ✅</h1>
      <v-btn color="primary">Seguimos firmes</v-btn>
      <v-btn
  icon
  color="error"
  @click="$inertia.post(route('logout'))"
>
  <v-icon>mdi-logout</v-icon>
</v-btn>
    </v-card>
  </v-container>
</template>
