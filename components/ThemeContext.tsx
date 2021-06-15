import React from "react";

if (typeof window !== "undefined") {
  const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
}

export const ThemeContext = React.createContext({
  darkTheme: false,
  setDarkTheme: (theme) => {},
})
