import React, { createContext, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import themes from "../themes";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [themeName, setThemeName] = useState("dark");

  const changeTheme = (name) => {
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        changeTheme,
      }}
    >
      <ThemeProvider theme={themes[themeName]}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}