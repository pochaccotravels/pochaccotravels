import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'site',
    themes: {
      site: {
        dark: false,
        colors: {
          primary: '#2445C9',   // royal blue
          secondary: '#9DB4FF', // periwinkle
          accent: '#FFD166',    // butter yellow
          background: '#F7F8FF',
          surface: '#FFFFFF',
        },
      },
    },
  },
})