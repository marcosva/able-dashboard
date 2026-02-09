import '../css/app.scss'
import './bootstrap'

import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createApp, h, DefineComponent } from 'vue'
import { ZiggyVue } from '../../vendor/tightenco/ziggy'
import { vuetify } from './plugins/vuetify'
import { createPinia } from 'pinia'
import { useAuthStore } from './stores/authStore'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

createInertiaApp({
  title: (title) => `${title} - ${appName}`,

  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.vue`,
      import.meta.glob<DefineComponent>('./Pages/**/*.vue')
    ),

  setup({ el, App, props, plugin }) {
    const pinia = createPinia()

    const vueApp = createApp({
      render: () => h(App, props)
    })

    vueApp
      .use(plugin)
      .use(ZiggyVue)
      .use(pinia)
      .use(vuetify)

    vueApp.mount(el)

    // 🔥 iniciar auth store
    const auth = useAuthStore()
    auth.init()
  },

  progress: {
    color: '#4B5563'
  }
})
