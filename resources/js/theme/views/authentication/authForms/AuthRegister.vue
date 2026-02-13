<script setup lang="ts">
import { ref } from 'vue'
import { Head, useForm, Link } from '@inertiajs/vue3'
import SvgSprite from '../../../components/shared/SvgSprite.vue'

const show1 = ref(false)
const show2 = ref(false)

const form = useForm({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
})

cont submit = () => {
  form.post(route('register'), {
    onFinish: () => form.reset('password', 'password_confirmation'),
  })
}
</script>

<template>
  <Head title="Register" />

  <div class="d-flex justify-space-between align-center">
    <h3 class="text-h3 mb-0">Sign up</h3>

    <Link :href="route('login')" class="text-primary text-decoration-none">
      Already have an account?
    </Link>
  </div>

  <v-form @submit.prevent="submit" class="mt-7">

    <!-- NAME -->
    <div class="mb-6">
      <v-label>Name*</v-label>
      <v-text-field
        v-model="form.name"
        required
        variant="outlined"
        class="mt-2"
      />
    </div>

    <!-- EMAIL -->
    <div class="mb-6">
      <v-label>Email Address*</v-label>
      <v-text-field
        v-model="form.email"
        required
        type="email"
        variant="outlined"
        class="mt-2"
      />
    </div>

    <!-- PASSWORD -->
    <div class="mb-6">
      <v-label>Password*</v-label>
      <v-text-field
        v-model="form.password"
        :type="show1 ? 'text' : 'password'"
        required
        variant="outlined"
        class="mt-2"
      >
        <template #append-inner>
          <v-btn icon variant="text" @click="show1 = !show1">
            <SvgSprite
              :name="show1 ? 'custom-eye' : 'custom-eye-invisible'"
              style="width: 20px; height: 20px"
            />
          </v-btn>
        </template>
      </v-text-field>
    </div>

    <!-- CONFIRM PASSWORD -->
    <div class="mb-6">
      <v-label>Confirm Password*</v-label>
      <v-text-field
        v-model="form.password_confirmation"
        :type="show2 ? 'text' : 'password'"
        required
        variant="outlined"
        class="mt-2"
      >
        <template #append-inner>
          <v-btn icon variant="text" @click="show2 = !show2">
            <SvgSprite
              :name="show2 ? 'custom-eye' : 'custom-eye-invisible'"
              style="width: 20px; height: 20px"
            />
          </v-btn>
        </template>
      </v-text-field>
    </div>

    <!-- TERMS -->
    <div class="d-sm-inline-flex align-center mt-2 mb-7 font-weight-bold">
      <h6 class="text-caption">
        By signing up, you agree to our
        <Link href="#" class="text-primary text-decoration-none">
          Terms of Service
        </Link>
        and
        <Link href="#" class="text-primary text-decoration-none">
          Privacy Policy
        </Link>
      </h6>
    </div>

    <!-- BUTTON -->
    <v-btn
      type="submit"
      color="primary"
      block
      size="large"
      :loading="form.processing"
    >
      Create Account
    </v-btn>

    <!-- ERRORS -->
    <v-alert
      v-if="Object.keys(form.errors).length"
      type="error"
      variant="tonal"
      class="mt-4"
    >
      <div v-for="(error, key) in form.errors" :key="key">
        {{ error }}
      </div>
    </v-alert>

  </v-form>
</template>
