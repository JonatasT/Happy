import { theme, DefaultTheme } from "@chakra-ui/core";

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: "Nunito, system-ui, sans-serif",
    heading: "Nunito, system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 700,
    bold: 800,
  },
  radii: {
    ...theme.radii,
    sm: "5px",
    md: "8px",
    lg: "40",
  },
  fontSizes: {
    ...theme.fontSizes,
    "6xl": "7rem",
  },
  lineHeights: {
    ...theme.lineHeights,
    shorter: "0.8",
  },
  colors: {
    ...theme.colors,
    orange: {
      ...theme.colors.orange,
      400: "#FF6400",
    },
    gray: {
      ...theme.colors.gray,
      100: "5C8599",
    },
  },
  icons: {
    ...theme.icons,
  },
};

export default customTheme;
