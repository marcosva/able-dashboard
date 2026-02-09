import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export const vuetify = createVuetify({
  defaults: {
    VBtn: {
      variant: 'flat',
    },
    VCard: {
      elevation: 1,
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#5B8DEF', // luego lo cambiamos a Able Pro exacto
          secondary: '#6C757D',
        },
      },
    },
  },
})