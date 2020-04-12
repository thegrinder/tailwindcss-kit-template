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
        color: darkTheme.primary600,
        backgroundColor: darkTheme.primary50,
      },
      hover: {
        color: darkTheme.primary700,
        backgroundColor: darkTheme.primary100,
      },
      active: {
        color: darkTheme.primary800,
        backgroundColor: darkTheme.primary200,
      },
      disabled: {
        color: darkTheme.neutral500,
        backgroundColor: darkTheme.neutral200,
      },
    },
    low: {
      normal: {
        color: darkTheme.primary600,
      },
      hover: {
        color: darkTheme.primary700,
        backgroundColor: darkTheme.primary50,
      },
      active: {
        color: darkTheme.primary800,
        backgroundColor: darkTheme.primary100,
      },
      disabled: {
        color: darkTheme.neutral500,
        backgroundColor: darkTheme.neutral200,
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
        color: darkTheme.danger700,
        backgroundColor: darkTheme.danger50,
      },
      hover: {
        color: darkTheme.danger800,
        backgroundColor: darkTheme.danger100,
      },
      active: {
        color: darkTheme.danger900,
        backgroundColor: darkTheme.danger200,
      },
      disabled: {
        color: darkTheme.neutral500,
        backgroundColor: darkTheme.neutral200,
      },
    },
    low: {
      normal: {
        color: darkTheme.danger700,
      },
      hover: {
        color: darkTheme.danger800,
        backgroundColor: darkTheme.danger50,
      },
      active: {
        color: darkTheme.danger900,
        backgroundColor: darkTheme.danger100,
      },
      disabled: {
        color: darkTheme.neutral500,
        backgroundColor: darkTheme.neutral100,
      },
    },
  },
};

module.exports = buttonDarkTheme;
