const lightTheme = {
  primary: {
    50: 'hsl(201, 100%, 95%)',
    100: 'hsl(205, 100%, 86%)',
    200: 'hsl(206, 93%, 73%)',
    300: 'hsl(208, 88%, 62%)',
    400: 'hsl(210, 83%, 53%)',
    500: 'hsl(212, 92%, 43%)',
    600: 'hsl(214, 95%, 36%)',
    700: 'hsl(215, 96%, 32%)',
    800: 'hsl(216, 98%, 25%)',
    900: 'hsl(218, 100%, 17%)',
  },
  neutral: {
    0: 'hsl(0, 0%, 100%)',
    50: 'hsl(216, 20%, 97%)',
    100: 'hsl(210, 13%, 91%)',
    200: 'hsl(210, 15%, 82%)',
    300: 'hsl(211, 20%, 65%)',
    400: 'hsl(210, 18%, 53%)',
    500: 'hsl(211, 16%, 43%)',
    600: 'hsl(209, 18%, 34%)',
    700: 'hsl(209, 21%, 23%)',
    800: 'hsl(210, 22%, 13%)',
    900: 'hsl(210, 24%, 9%)',
    1000: 'hsl(210, 17%, 7%)',
  },
  danger: {
    50: 'hsl(0, 100%, 95%)',
    100: 'hsl(0, 100%, 87%)',
    200: 'hsl(0, 100%, 80%)',
    300: 'hsl(0, 91%, 69%)',
    400: 'hsl(0, 83%, 62%)',
    500: 'hsl(356, 75%, 53%)',
    600: 'hsl(354, 85%, 44%)',
    700: 'hsl(352, 90%, 35%)',
    800: 'hsl(350, 94%, 28%)',
    900: 'hsl(348, 94%, 20%)',
  },
  warning: {
    50: 'hsl(48, 100%, 96%)',
    100: 'hsl(48, 100%, 88%)',
    200: 'hsl(48, 95%, 76%)',
    300: 'hsl(48, 94%, 68%)',
    400: 'hsl(44, 92%, 63%)',
    500: 'hsl(42, 87%, 55%)',
    600: 'hsl(36, 77%, 49%)',
    700: 'hsl(29, 80%, 44%)',
    800: 'hsl(22, 82%, 39%)',
    900: 'hsl(15, 86%, 30%)',
  },
  success: {
    50: 'hsl(123, 66%, 93%)',
    100: 'hsl(127, 66%, 85%)',
    200: 'hsl(124, 62%, 74%)',
    300: 'hsl(123, 53%, 55%)',
    400: 'hsl(123, 57%, 45%)',
    500: 'hsl(122, 73%, 35%)',
    600: 'hsl(122, 80%, 29%)',
    700: 'hsl(125, 79%, 26%)',
    800: 'hsl(125, 86%, 20%)',
    900: 'hsl(125, 97%, 14%)',
  },
};

const darkTheme = {
  primary: {
    50: 'hsl(218, 40%, 17%)',
    100: 'hsl(216, 55%, 20%)',
    200: 'hsl(215, 63%, 24%)',
    300: 'hsl(214, 73%, 30%)',
    400: 'hsl(212, 57%, 40%)',
    500: 'hsl(210, 47%, 50%)',
    600: 'hsl(208, 60%, 62%)',
    700: 'hsl(207, 69%, 73%)',
    800: 'hsl(204, 89%, 86%)',
    900: 'hsl(201, 100%, 95%)',
  },
  neutral: {
    0: 'hsl(210, 19%, 7%)',
    50: 'hsl(210, 24%, 9%)',
    100: 'hsl(210, 22%, 13%)',
    200: 'hsl(209, 21%, 23%)',
    300: 'hsl(209, 18%, 34%)',
    400: 'hsl(211, 16%, 43%)',
    500: 'hsl(210, 18%, 53%)',
    600: 'hsl(211, 20%, 65%)',
    700: 'hsl(210, 15%, 82%)',
    800: 'hsl(210, 13%, 91%)',
    900: 'hsl(216, 20%, 97%)',
    1000: 'hsl(0, 0%, 100%)',
  },
  success: {
    50: 'hsl(126, 30%, 14%)',
    100: 'hsl(125, 33%, 20%)',
    200: 'hsl(125, 46%, 24%)',
    300: 'hsl(123, 48%, 29%)',
    400: 'hsl(122, 47%, 35%)',
    500: 'hsl(123, 33%, 45%)',
    600: 'hsl(123, 30%, 55%)',
    700: 'hsl(124, 50%, 74%)',
    800: 'hsl(127, 61%, 85%)',
    900: 'hsl(125, 67%, 93%)',
  },
  warning: {
    50: 'hsl(15, 52%, 30%)',
    100: 'hsl(22, 60%, 34%)',
    200: 'hsl(29, 64%, 44%)',
    300: 'hsl(36, 62%, 49%)',
    400: 'hsl(42, 76%, 55%)',
    500: 'hsl(44, 81%, 63%)',
    600: 'hsl(48, 76%, 68%)',
    700: 'hsl(48, 87%, 76%)',
    800: 'hsl(48, 100%, 88%)',
    900: 'hsl(48, 100%, 96%)',
  },
  danger: {
    50: 'hsl(348, 53%, 20%)',
    100: 'hsl(350, 52%, 26%)',
    200: 'hsl(352, 59%, 31%)',
    300: 'hsl(354, 60%, 37%)',
    400: 'hsl(356, 59%, 41%)',
    500: 'hsl(0, 61%, 55%)',
    600: 'hsl(0, 73%, 65%)',
    700: 'hsl(0, 92%, 76%)',
    800: 'hsl(0, 95%, 85%)',
    900: 'hsl(0, 100%, 95%)',
  },
};

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
  ignore: ['readme.md', 'license.md'],
};

export default config;
