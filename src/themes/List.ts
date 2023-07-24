import { listAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle((props) => ({
  container: {
    backgroundColor: "white",
  },
  item: {
    whiteSpace: "nowrap",
    textAlign: "center",
    padding: "10px 0",
    borderBottom: "2px solid var(--chakra-colors-gray-300)",
  },
}));

export const listTheme = defineMultiStyleConfig({ baseStyle });
