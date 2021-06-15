import React from "react";

const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");

export const ThemeContext = React.createContext({
  darkTheme: darkTheme,
  setDarkTheme: (theme) => {},
})
