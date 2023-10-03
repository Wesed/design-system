/** @type {import('tailwindcss').Config} */
import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radius,
  space,
} from '@design-ui/tokens'

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontSize: {
        ...fontSizes,
      },
      fontWeight: {
        ...fontWeights,
      },
      fontFamily: {
        ...fonts,
      },
      lineHeight: {
        ...lineHeights,
      },
      borderRadius: {
        ...radius,
      },
      spacing: {
        ...space,
      },
    },
  },
  plugins: [],
}
