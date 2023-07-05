import { createTheme } from '@mui/material'

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#2D4356'
    },
    secondary: {
      main: '#435B66',
      light: '#9DB2BF'
    },
    error: {
      main: '#CD1818'
    }
  },
  components : {
    MuiAlert : {
      styleOverrides : {
        root : {
          '&.MuiAlert-error': {
            backgroundColor: '#CD1818',
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
