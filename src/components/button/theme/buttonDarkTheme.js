const { darkTheme } = require('../../../colors');

const buttonDarkTheme = {
  primary: {
    high: {
      normal: {
        color: darkTheme.neutral0,
        backgroundColor: darkTheme.primary500,
      },
      hover: {
        backgroundColor: darkTheme.primary600,
      },
      active: {
        backgroundColor: darkTheme.primary700,
      },
      disabled: {
        backgroundColor: darkTheme.neutral400,
      },
    },
    medium: {
      normal: {
        color: darkTheme.primary500,
        backgroundColor: darkTheme.primary50,
      },
      hover: {
        color: darkTheme.primary700,
        backgroundColor: darkTheme.primary100,
      },
      active: {
        color: darkTheme.primary900,
        backgroundColor: darkTheme.primary200,
      },
      disabled: {
        color: darkTheme.neutral0,
        backgroundColor: darkTheme.neutral400,
      },
    },
    low: {
      normal: {
        color: darkTheme.primary500,
      },
      hover: {
        color: darkTheme.primary700,
        backgroundColor: darkTheme.primary50,
      },
      active: {
        color: darkTheme.primary900,
        backgroundColor: darkTheme.primary100,
      },
      disabled: {
        color: darkTheme.neutral0,
        backgroundColor: darkTheme.neutral400,
      },
    },
  },
  danger: {
    high: {
      normal: {
        color: darkTheme.neutral0,
        backgroundColor: darkTheme.danger500,
      },
      hover: {
        backgroundColor: darkTheme.danger600,
      },
      active: {
        backgroundColor: darkTheme.danger700,
      },
      disabled: {
        backgroundColor: darkTheme.neutral400,
      },
    },
    medium: {
      normal: {
        color: darkTheme.danger500,
        backgroundColor: darkTheme.danger50,
      },
      hover: {
        color: darkTheme.danger700,
        backgroundColor: darkTheme.danger100,
      },
      active: {
        color: darkTheme.danger900,
        backgroundColor: darkTheme.danger200,
      },
      disabled: {
        color: darkTheme.neutral0,
        backgroundColor: darkTheme.neutral400,
      },
    },
    low: {
      normal: {
        color: darkTheme.danger500,
      },
      hover: {
        color: darkTheme.danger700,
        backgroundColor: darkTheme.danger50,
      },
      active: {
        color: darkTheme.danger900,
        backgroundColor: darkTheme.danger100,
      },
      disabled: {
        color: darkTheme.neutral0,
        backgroundColor: darkTheme.neutral400,
      },
    },
  },
};

module.exports = buttonDarkTheme;
