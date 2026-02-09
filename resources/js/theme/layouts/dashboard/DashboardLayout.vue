<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useTheme } from 'vuetify'

/*
|--------------------------------------------------------------------------
| Layout Components
|--------------------------------------------------------------------------
*/
import LoaderWrapper from './LoaderWrapper.vue'
import VerticalSidebarVue from './vertical-sidebar/VerticalSidebar.vue'
import VerticalHeaderVue from './vertical-header/VerticalHeader.vue'
import HorizontalHeader from './horizontal-header/HorizontalHeader.vue'
import HorizontalSidebar from './horizontal-sidebar/HorizontalSidebar.vue'
import Customizer from './customizer/CustomizerPanel.vue'
import FooterPanel from './footer/FooterPanel.vue'

/*
|--------------------------------------------------------------------------
| Store
|--------------------------------------------------------------------------
*/
import { useCustomizerStore } from '../../stores/customizer'

/*
|--------------------------------------------------------------------------
| Utils (SOLO dirección, nada de HexToRgb)
|--------------------------------------------------------------------------
*/
import { DirAttrSet } from '../../utils/utils'

const customizer = useCustomizerStore()
useTheme() // solo inicializa vuetify theme (no necesitamos más)

/*
|--------------------------------------------------------------------------
| RTL handling
|--------------------------------------------------------------------------
*/
onMounted(() => {
  DirAttrSet(customizer.isRtl ? 'rtl' : 'ltr')
})

watch(
  () => customizer.isRtl,
  (val) => {
    DirAttrSet(val ? 'rtl' : 'ltr')
  }
)
</script>

<template>
  <v-locale-provider :rtl="customizer.isRtl">
    <v-app
      :theme="customizer.actTheme"
      :class="[
        customizer.actTheme,
        customizer.fontTheme,
        customizer.miniSidebar ? 'mini-sidebar' : '',
        customizer.isHorizontalLayout ? 'horizontalLayout' : 'verticalLayout',
        customizer.inputBg ? 'inputWithbg' : '',
        customizer.themeContrast ? 'contrast' : ''
      ]"
    >
      <!-- ⚙️ Customizer panel -->
      <Customizer />

      <!-- 🧭 Sidebars & headers -->
      <VerticalSidebarVue v-if="!customizer.isHorizontalLayout" />
      <VerticalHeaderVue v-if="!customizer.isHorizontalLayout" />

      <HorizontalHeader v-if="customizer.isHorizontalLayout" />
      <HorizontalSidebar v-if="customizer.isHorizontalLayout" />

      <!-- 📄 Main content -->
      <v-main class="page-wrapper">
        <v-container fluid>
          <div :class="customizer.boxed ? 'maxWidth' : ''">
            <LoaderWrapper />
            <slot />
          </div>
        </v-container>

        <v-container fluid class="pt-0">
          <div :class="customizer.boxed ? 'maxWidth' : ''">
            <FooterPanel />
          </div>
        </v-container>
      </v-main>
    </v-app>
  </v-locale-provider>
</template>
