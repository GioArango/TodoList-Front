import { createTheme } from '@mui/material'

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#00D5A7'
    },
    secondary: {
      main: '#808080',
      light: '#f2f2f2'
    },
    error: {
      main: '#E53966'
    }
  },
  components : {
    MuiAlert : {
      styleOverrides : {
        root : {
          '&.MuiAlert-error': {
            backgroundColor: '#E53966',
            color: '#fff',
          },
          '&.MuiAlert-success': {
            backgroundColor: '#00D5A7',
            color: '#fff',
          },
        }
      }
    }
  }
})
