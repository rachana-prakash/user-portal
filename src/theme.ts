import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  colors: {
    purple: {
      main: "#6238c8",
      side: "#3e56c8",
    },
    white: "#ffffff",
    gray: {
      dark: "#595959",
      font: "#494443",
      light: "#a3a3a3",
    },
  },
});

export default theme;
