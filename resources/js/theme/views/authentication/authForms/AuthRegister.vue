<script setup lang="ts">
import { ref } from 'vue'
import { useForm, Link } from '@inertiajs/vue3'
import SvgSprite from '../../../components/shared/SvgSprite.vue'

const show1 = ref(false)

const form = useForm({
  firstname: '',
  lastname: '',
  company: '',
  email: '',
  password: '',
})

const submit = () => {
  form.post(route('register'))
}
</script>

<template>
  <div class="d-flex justify-space-between align-center">
    <h3 class="text-h3 text-center mb-0">Sign up</h3>

    <Link :href="route('login')" class="text-primary text-decoration-none">
      Already have an account?
    </Link>
  </div>

  <v-form @submit.prevent="submit" class="mt-7 loginForm">
    <v-row class="my-0">
      <v-col cols="12" sm="6" class="py-0">
        <div class="mb-6">
          <v-label>First Name*</v-label>
          <v-text-field
            v-model="form.firstname"
            hide-details="auto"
            required
            variant="outlined"
            class="mt-2"
            color="primary"
            placeholder="John"
          />
        </div>
      </v-col>

      <v-col cols="12" sm="6" class="py-0">
        <div class="mb-6">
          <v-label>Last Name*</v-label>
          <v-text-field
            v-model="form.lastname"
            hide-details="auto"
            required
            variant="outlined"
            class="mt-2"
            color="primary"
            placeholder="Doe"
          />
        </div>
      </v-col>
    </v-row>

    <div class="mb-6">
      <v-label>Company</v-label>
      <v-text-field
        v-model="form.company"
        hide-details="auto"
        variant="outlined"
        class="mt-2"
        color="primary"
        placeholder="Demo Inc."
      />
    </div>

    <div class="mb-6">
      <v-label>Email Address*</v-label>
      <v-text-field
        v-model="form.email"
        placeholder="demo@company.com"
        class="mt-2"
        required
        hide-details="auto"
        variant="outlined"
        color="primary"
      />
    </div>

    <div class="mb-6">
      <v-label>Password</v-label>
      <v-text-field
        v-model="form.password"
        placeholder="*****"
        required
        variant="outlined"
        color="primary"
        hide-details="auto"
        :type="show1 ? 'text' : 'password'"
        class="pwdInput mt-2"
      >
        <template #append-inner>
          <v-btn color="secondary" icon rounded variant="text">
            <SvgSprite
              name="custom-eye-invisible"
              style="width: 20px; height: 20px"
              v-if="!show1"
              @click="show1 = true"
            />
            <SvgSprite
              name="custom-eye"
              style="width: 20px; height: 20px"
              v-else
              @click="show1 = false"
            />
          </v-btn>
        </template>
      </v-text-field>
    </div>

    <div class="d-sm-inline-flex align-center mt-2 mb-7 mb-sm-0 font-weight-bold">
      <h6 class="text-caption">
        By Signing up, you agree to our
        <Link href="#" class="text-primary link-hover font-weight-medium">
          Terms of Service
        </Link>
        and
        <Link href="#" class="text-primary link-hover font-weight-medium">
          Privacy Policy
        </Link>
      </h6>
    </div>

    <v-btn
      type="submit"
      color="primary"
      block
      class="mt-4"
      variant="flat"
      rounded="md"
      size="large"
      :loading="form.processing"
    >
      Create Account
    </v-btn>

    <div v-if="form.errors.email" class="mt-3">
      <v-alert type="error" variant="tonal">
        {{ form.errors.email }}
      </v-alert>
    </div>
  </v-form>
</template>

