/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark:{
        dark: true,
        colors: {
          background: '#25316D',
          primary: '#97D2EC',
          secondary: '#5F6F94',
          accent: '#FEF5AC',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          destructive: '#EB455F'
        }
      },
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
})
