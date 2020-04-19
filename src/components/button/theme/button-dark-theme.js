const { darkTheme } = require('../../../colors');

const buttonDarkTheme = {
  primary: {
    high: {
      normal: {
        color: darkTheme.neutral[0],
        backgroundColor: darkTheme.primary[500],
      },
      hover: {
        backgroundColor: darkTheme.primary[600],
      },
      active: {
        backgroundColor: darkTheme.primary[700],
      },
      disabled: {
        backgroundColor: darkTheme.neutral[400],
      },
    },
    medium: {
      normal: {
        color: darkTheme.primary[500],
        backgroundColor: darkTheme.primary[50],
      },
      hover: {
        color: darkTheme.primary[700],
        backgroundColor: darkTheme.primary[100],
      },
      active: {
        color: darkTheme.primary[900],
        backgroundColor: darkTheme.primary[200],
      },
      disabled: {
        color: darkTheme.neutral[0],
        backgroundColor: darkTheme.neutral[400],
      },
    },
    low: {
      normal: {
        color: darkTheme.primary[500],
      },
      hover: {
        color: darkTheme.primary[700],
        backgroundColor: darkTheme.primary[50],
      },
      active: {
        color: darkTheme.primary[900],
        backgroundColor: darkTheme.primary[100],
      },
      disabled: {
        color: darkTheme.neutral[0],
        backgroundColor: darkTheme.neutral[400],
      },
    },
  },
  danger: {
    high: {
      normal: {
        color: darkTheme.neutral[0],
        backgroundColor: darkTheme.danger[500],
      },
      hover: {
        backgroundColor: darkTheme.danger[600],
      },
      active: {
        backgroundColor: darkTheme.danger[700],
      },
      disabled: {
        backgroundColor: darkTheme.neutral[400],
      },
    },
    medium: {
      normal: {
        color: darkTheme.danger[500],
        backgroundColor: darkTheme.danger[50],
      },
      hover: {
        color: darkTheme.danger[700],
        backgroundColor: darkTheme.danger[100],
      },
      active: {
        color: darkTheme.danger[900],
        backgroundColor: darkTheme.danger[200],
      },
      disabled: {
        color: darkTheme.neutral[0],
        backgroundColor: darkTheme.neutral[400],
      },
    },
    low: {
      normal: {
        color: darkTheme.danger[500],
      },
      hover: {
        color: darkTheme.danger[700],
        backgroundColor: darkTheme.danger[50],
      },
      active: {
        color: darkTheme.danger[900],
        backgroundColor: darkTheme.danger[100],
      },
      disabled: {
        color: darkTheme.neutral[0],
        backgroundColor: darkTheme.neutral[400],
      },
    },
  },
};

module.exports = buttonDarkTheme;
