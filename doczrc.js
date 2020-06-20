// eslint-disable-next-line import/extensions
import { darkTheme, lightTheme } from '../src/colors';

const dark = {
  primary: darkTheme.primary[500],
  text: darkTheme.neutral[700],
  muted: darkTheme.neutral[700],
  link: darkTheme.primary[500],
  background: darkTheme.neutral[0],
  border: darkTheme.neutral[100],
  sidebar: {
    bg: darkTheme.neutral[50],
    navGroup: darkTheme.neutral[600],
    navLink: darkTheme.neutral[700],
    navLinkActive: darkTheme.primary[500],
    tocLink: darkTheme.neutral[400],
    tocLinkActive: darkTheme.primary[500],
  },
  header: {
    bg: darkTheme.neutral[50],
    text: darkTheme.neutral[800],
    border: darkTheme.neutral[100],
    button: {
      bg: darkTheme.primary[500],
      color: darkTheme.neutral[50],
    },
  },
  playground: {
    bg: darkTheme.neutral[50],
    border: darkTheme.neutral[100],
  },
};

const light = {
  primary: lightTheme.primary[500],
  text: lightTheme.neutral[700],
  muted: lightTheme.neutral[700],
  link: lightTheme.primary[500],
  background: lightTheme.neutral[0],
  border: lightTheme.neutral[100],
  sidebar: {
    bg: lightTheme.neutral[50],
    navGroup: lightTheme.neutral[700],
    navLink: lightTheme.neutral[700],
    navLinkActive: lightTheme.primary[500],
    tocLink: lightTheme.neutral[500],
    tocLinkActive: lightTheme.primary[500],
  },
  header: {
    bg: lightTheme.neutral[50],
    text: lightTheme.neutral[800],
    border: lightTheme.neutral[100],
    button: {
      bg: lightTheme.primary[500],
      color: lightTheme.neutral[50],
    },
  },
  playground: {
    bg: lightTheme.neutral[0],
    border: lightTheme.neutral[100],
  },
};

const themeConfig = {
  colors: {
    modes: {
      dark,
      light,
    },
  },
  prism: {
    dark: {
      plain: {
        backgroundColor: darkTheme.neutral[50],
      },
    },
    light: {
      plain: {
        backgroundColor: lightTheme.neutral[50],
      },
    },
  },
};

const config = {
  themeConfig,
  base: '/tailwindcss-kit-template/',
};

export default config;
