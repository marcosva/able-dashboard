<script setup lang="ts">
import { ref } from 'vue'
import { useForm, Link } from '@inertiajs/vue3'
import SvgSprite from '../../../components/shared/SvgSprite.vue'

const show1 = ref(false)

const form = useForm({
  email: '',
  password: '',
  remember: false
})

const submit = () => {
  form.post(route('login'))
}
</script>

<template>
  <v-form @submit.prevent="submit" class="mt-7 loginForm">

    <!-- EMAIL -->
    <div class="mb-6">
      <v-label>Email Address</v-label>
      <v-text-field
        v-model="form.email"
        density="comfortable"
        required
        hide-details="auto"
        variant="outlined"
        color="primary"
        class="mt-2"
      />
      <div v-if="form.errors.email" class="mt-2">
        <v-alert color="error" variant="tonal">
          {{ form.errors.email }}
        </v-alert>
      </div>
    </div>

    <!-- PASSWORD -->
    <div>
      <v-label>Password</v-label>
      <v-text-field
        v-model="form.password"
        :type="show1 ? 'text' : 'password'"
        required
        variant="outlined"
        density="comfortable"
        color="primary"
        hide-details="auto"
        class="pwdInput mt-2"
      >
        <template #append-inner>
          <v-btn color="secondary" icon rounded variant="text">
            <SvgSprite
              name="custom-eye-invisible"
              v-if="!show1"
              @click="show1 = true"
  style="width: 20px; height: 20px"
            />
            <SvgSprite
              name="custom-eye"
              v-else
              @click="show1 = false"
               
  style="width: 20px; height: 20px"
            />
          </v-btn>
        </template>
      </v-text-field>

      <div v-if="form.errors.password" class="mt-2">
        <v-alert color="error" variant="tonal">
          {{ form.errors.password }}
        </v-alert>
      </div>
    </div>

    <!-- REMEMBER + FORGOT -->
    <div class="d-flex align-center justify-space-between mt-4 mb-7 mb-sm-0">
      <v-checkbox
        v-model="form.remember"
        label="Keep me signed in"
        color="primary"
        class="ms-n2"
        hide-details
      />

      <div class="ms-auto">
        <Link :href="route('password.request')" class="text-darkText link-hover">
          Forgot Password?
        </Link>
      </div>
    </div>

    <!-- BUTTON -->
    <v-btn
      color="primary"
      :loading="form.processing"
      block
      class="mt-5"
      variant="flat"
      size="large"
      rounded="md"
      type="submit"
    >
      Login
    </v-btn>
    <div class="flex justify-space-between mt-6">
  <span>Don't have an Account?</span>

  <Link
    :href="route('register')"
    class="text-primary ms-2 text-decoration-none"
  >
    Create Account
  </Link>
</div>

  </v-form>
</template>
