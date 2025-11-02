import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    background: { default: '#1A1A1A', paper: '#1A1A1A' },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255,255,255,0.7)',
    },
    divider: 'rgba(255,255,255,0.12)',
  },
  typography: {
          fontFamily: ['Sora', 'Manrope','sans-serif'].join(','),
  }
})

export default responsiveFontSizes(theme)