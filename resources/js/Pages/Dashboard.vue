<script setup lang="ts">
import AppLayout from '@/Layouts/AppLayout.vue'

defineOptions({
  layout: AppLayout,
})
</script>

<template>
  <v-container>
    <v-card class="pa-6">
      <h1>Estructura base ✅</h1>
      <v-btn color="primary">Boton </v-btn>
      <v-btn icon color="error" name="boton" @click="$inertia.post(route('logout'))">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-card>
  </v-container>
</template>
