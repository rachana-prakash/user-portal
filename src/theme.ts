import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { listTheme } from "./themes/List";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  components: { List: listTheme },
  colors: {
    purple: {
      50: "#6238c8",
      100: "#3e56c8",
    },
    white: { 50: "#f4ecec" },
    gray: {
      200: "#a3a3a3",
      500: "#494443",
      600: "#595959",
    },
  },
});

export default theme;
