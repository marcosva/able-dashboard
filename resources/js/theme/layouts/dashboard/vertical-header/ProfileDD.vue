<script setup lang="ts">
import { ref } from 'vue'
import SvgSprite from '../../../components/shared/SvgSprite.vue'
import { useCustomizerStore } from '../../../stores/customizer'
import { router } from '@inertiajs/vue3'


const tab = ref(null)
const customizer = useCustomizerStore()

const handleAction = (item: any) => {
  if (item.action === 'logout') {
    router.post('/logout')
  }
}




// 👇 ahora sin auth, nombre estático
const userName = 'Guest'

// datos del menú
const profiledata1 = ref([
  { title: 'Edit profile', icon: 'custom-edit' },
  { title: 'View Profile', icon: 'custom-user-1' },
  { title: 'Log out', icon: 'custom-logout-1-outline', action: 'logout' }
])

const profiledata2 = ref([
  { title: 'Support', icon: 'custom-support' },
  { title: 'Account settings', icon: 'custom-user-1' },
  { title: 'Privacy center', icon: 'custom-lock' },
  { title: 'Feedback', icon: 'custom-comment' },
  { title: 'History', icon: 'custom-history' }
])
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!-- profile dropdown -->
  <!-- ---------------------------------------------- -->
  <div>
    <!-- header -->
    <div class="d-flex align-center pa-5">
      <v-avatar size="40" class="me-2">
        <img src="../../../assets/images/users/avatar-6.png" width="40" alt="profile" />
      </v-avatar>

      <div>
        <h6 class="text-subtitle-1 mb-0">{{ userName }}</h6>
        <p class="text-caption text-lightText mb-0">UI/UX Designer</p>
      </div>
    </div>

    <!-- tabs -->
    <v-tabs v-model="tab" color="primary" grow>
      <v-tab value="111">
        <div class="v-icon--start">
          <SvgSprite name="custom-user-outline" style="width:18px;height:18px" />
        </div>
        Profile
      </v-tab>

      <v-tab value="222">
        <div class="v-icon--start">
          <SvgSprite name="custom-setting-outline-1" style="width:18px;height:18px" />
        </div>
        Setting
      </v-tab>
    </v-tabs>

    <v-divider />

    <perfect-scrollbar style="height:calc(100vh - 300px); max-height:240px">
      <v-window v-model="tab">

        <!-- TAB 1 -->
        <v-window-item value="111">
  <v-list class="px-2">

    <template v-for="(item, index) in profiledata1" :key="index">

      <!-- 🔴 LOGOUT COMO BOTÓN -->
      <template v-if="item.action === 'logout'">
        <v-divider class="my-3" />

        <v-btn
          block
          color="error"
          variant="tonal"
          class="my-1"
          @click="handleAction(item)"
        >
          <SvgSprite :name="item.icon" class="me-2" style="width:18px;height:18px" />
          {{ item.title }}
        </v-btn>
      </template>

      <!-- 🧩 ITEMS NORMALES -->
      <template v-else>
        <v-list-item
          rounded="md"
          :base-color="customizer.actTheme === 'dark' ? 'lightText' : 'secondary'"
        >
          <template #prepend>
            <div class="me-4">
              <SvgSprite :name="item.icon" style="width:18px;height:18px" />
            </div>
          </template>

          <v-list-item-title class="text-h6">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </template>

    </template>

  </v-list>
</v-window-item>

        <!-- TAB 2 -->
        <v-window-item value="222">
          <v-list class="px-2">
            <v-list-item
              v-for="(item, index) in profiledata2"
              :key="index"
              rounded="md"
              :base-color="customizer.actTheme === 'dark' ? 'lightText' : 'secondary'"
            >
              <template #prepend>
                <div class="me-4">
                  <SvgSprite :name="item.icon" style="width:18px;height:18px" />
                </div>
              </template>

              <v-list-item-title class="text-h6">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-window-item>

      </v-window>
    </perfect-scrollbar>
  </div>
</template>
