import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export const vuetify = createVuetify({
  theme: {
    defaultTheme: 'ableDark',
    themes: {
      ableDark: {
        dark: true,
        colors: {
          primary: '#5B8DEF',
          secondary: '#2C3446',


          


          background: '#0F172A',
          surface: '#111827',
          'surface-variant': '#1F2937',

          'on-surface': '#E5E7EB',
          'on-background': '#E5E7EB',

          outline: 'rgba(255,255,255,0.12)',

          error: '#EF4444',
          info: '#3B82F6',
          success: '#10B981',
          warning: '#F59E0B',
        },
      },
    },
  },
})
