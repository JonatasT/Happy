import { theme, DefaultTheme } from "@chakra-ui/core";

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: 'Nunito, system-ui, sans-serif',
    heading: 'Nunito, system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 700,
    bold: 800,
  },
  radii: {
    ...theme.radii,
    sm: '5px',
    md: '8px',
    lg: '40px',
  },
  fontSizes: {
    ...theme.fontSizes,
    '6xl': '54px',
  },
  colors: {
    ...theme.colors,
    orange: {
      ...theme.colors.orange,
      400: '#FF6400'
    }
  }
};

export default customTheme;
