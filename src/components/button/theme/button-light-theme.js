const { lightTheme } = require('../../../colors');

const buttonLightTheme = {
  primary: {
    high: {
      base: {
        color: lightTheme.neutral[0],
        backgroundColor: lightTheme.primary[500],
      },
      hover: {
        backgroundColor: lightTheme.primary[600],
      },
      active: {
        backgroundColor: lightTheme.primary[700],
      },
      disabled: {
        backgroundColor: lightTheme.neutral[400],
      },
    },
    medium: {
      base: {
        color: lightTheme.primary[500],
        backgroundColor: lightTheme.primary[50],
      },
      hover: {
        color: lightTheme.primary[700],
        backgroundColor: lightTheme.primary[100],
      },
      active: {
        color: lightTheme.primary[900],
        backgroundColor: lightTheme.primary[200],
      },
      disabled: {
        color: lightTheme.neutral[0],
        backgroundColor: lightTheme.neutral[400],
      },
    },
    low: {
      base: {
        color: lightTheme.primary[500],
      },
      hover: {
        color: lightTheme.primary[700],
        backgroundColor: lightTheme.primary[50],
      },
      active: {
        color: lightTheme.primary[900],
        backgroundColor: lightTheme.primary[100],
      },
      disabled: {
        color: lightTheme.neutral[0],
        backgroundColor: lightTheme.neutral[400],
      },
    },
  },
  danger: {
    high: {
      base: {
        color: lightTheme.neutral[0],
        backgroundColor: lightTheme.danger[500],
      },
      hover: {
        backgroundColor: lightTheme.danger[600],
      },
      active: {
        backgroundColor: lightTheme.danger[700],
      },
      disabled: {
        backgroundColor: lightTheme.neutral[400],
      },
    },
    medium: {
      base: {
        color: lightTheme.danger[500],
        backgroundColor: lightTheme.danger[50],
      },
      hover: {
        color: lightTheme.danger[700],
        backgroundColor: lightTheme.danger[100],
      },
      active: {
        color: lightTheme.danger[900],
        backgroundColor: lightTheme.danger[200],
      },
      disabled: {
        color: lightTheme.neutral[0],
        backgroundColor: lightTheme.neutral[400],
      },
    },
    low: {
      base: {
        color: lightTheme.danger[500],
      },
      hover: {
        color: lightTheme.danger[700],
        backgroundColor: lightTheme.danger[50],
      },
      active: {
        color: lightTheme.danger[900],
        backgroundColor: lightTheme.danger[100],
      },
      disabled: {
        color: lightTheme.neutral[0],
        backgroundColor: lightTheme.neutral[400],
      },
    },
  },
};

module.exports = buttonLightTheme;
