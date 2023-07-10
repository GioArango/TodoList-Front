import { CssBaseline, ThemeProvider } from "@mui/material";
import { ReactElement } from "react";
import { mainTheme } from "./";

interface Props {
    children: ReactElement | ReactElement[];
}

export const AppTheme = ({children}: Props) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
