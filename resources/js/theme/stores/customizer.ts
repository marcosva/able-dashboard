import { defineStore } from 'pinia'

export const useCustomizerStore = defineStore('customizer', {
  state: () => ({
    sidebarDrawer: true,
    customizerDrawer: false,
    miniSidebar: false,
    isHorizontalLayout: false,
    actTheme: 'dark',
    fontTheme: 'Inter-var',
    inputBg: false,
    themeContrast: false,
    boxed: false,
    isRtl: false
  }),

  actions: {
    SET_SIDEBAR_DRAWER() {
      this.sidebarDrawer = !this.sidebarDrawer
    },

    SET_MINI_SIDEBAR(payload: boolean) {
      this.miniSidebar = payload
    },

    SET_CUSTOMIZER_DRAWER(payload: boolean) {
      this.customizerDrawer = payload
    },

    SET_LAYOUT(payload: boolean) {
      this.isHorizontalLayout = payload
    },

    SET_THEME(payload: string) {
      this.actTheme = payload
    },

    SET_FONT(payload: string) {
      this.fontTheme = payload
    },

    SET_DIRECTION(dir: 'ltr' | 'rtl') {
      this.isRtl = dir === 'rtl'
      document.documentElement.setAttribute('dir', dir)
    }
  }
})
