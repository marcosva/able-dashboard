import { defineStore } from 'pinia'
import { usePage, router } from '@inertiajs/vue3'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as any
  }),

  actions: {
    init() {
      const page = usePage()
      this.user = page.props.auth?.user ?? null
    },

    logout() {
      router.post('/logout')
    }
  }
})
