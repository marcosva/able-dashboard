<script setup lang="ts">
import Logo from '../../../layouts/dashboard/logo/LogoMain.vue'
import AuthForgotPwd from '../authForms/AuthForgotPwd.vue'
import { Link } from '@inertiajs/vue3'
import leftImg from '../../../assets/images/auth/img-auth-sideimg.png'
</script>

<template>
  <v-row class="bg-surface position-relative" no-gutters>

    <!-- LEFT IMAGE -->
    <v-col cols="12" lg="7" md="6" class="d-md-block d-none">
      <v-img :src="leftImg" alt="banner" height="100%" cover />
    </v-col>

    <!-- RIGHT PANEL -->
    <v-col cols="12" lg="5" md="6" class="d-flex align-center">
      <v-container>
        <div class="d-flex align-center justify-center" style="min-height: calc(100vh - 148px)">
          <v-row justify="center">
            <v-col cols="12">
              <div class="pa-sm-10 pa-6 loginBox">

                <!-- LOGO -->
                <div class="text-center mb-6">
                  <Logo />
                </div>

                <!-- HEADER -->
                <div class="d-flex justify-space-between align-center mb-6">
                  <h3 class="text-h4 font-weight-bold">
                    Forgot Password
                  </h3>

                  <Link
                    :href="route('login')"
                    class="text-primary text-decoration-none"
                  >
                    Back to Login
                  </Link>
                </div>

                <!-- FORM -->
                <AuthForgotPwd />

              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>

  </v-row>
</template>

<style lang="scss">
.loginBox {
  max-width: 475px;
  margin: 0 auto;
}
</style>
