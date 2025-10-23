// src/theme/ThemeContext.jsx
import { createContext, useMemo, useState, useEffect } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState("dark");

  
  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode") || "dark";
    setMode(savedMode);
  }, []);

  
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "dark"
            ? {
                background: { default: "#121212", paper: "#1e1e1e" },
              }
            : {
                   background: { default: "#f5f5f5", paper: "#ffffff" },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
