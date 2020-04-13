const { lightTheme } = require('../../../colors');

const buttonLightTheme = {
  primary: {
    high: {
      normal: {
        color: lightTheme.neutral0,
        backgroundColor: lightTheme.primary500,
      },
      hover: {
        backgroundColor: lightTheme.primary600,
      },
      active: {
        backgroundColor: lightTheme.primary700,
      },
      disabled: {
        backgroundColor: lightTheme.neutral400,
      },
    },
    medium: {
      normal: {
        color: lightTheme.primary500,
        backgroundColor: lightTheme.primary50,
      },
      hover: {
        color: lightTheme.primary700,
        backgroundColor: lightTheme.primary100,
      },
      active: {
        color: lightTheme.primary900,
        backgroundColor: lightTheme.primary200,
      },
      disabled: {
        color: lightTheme.neutral0,
        backgroundColor: lightTheme.neutral400,
      },
    },
    low: {
      normal: {
        color: lightTheme.primary500,
      },
      hover: {
        color: lightTheme.primary700,
        backgroundColor: lightTheme.primary50,
      },
      active: {
        color: lightTheme.primary900,
        backgroundColor: lightTheme.primary100,
      },
      disabled: {
        color: lightTheme.neutral0,
        backgroundColor: lightTheme.neutral400,
      },
    },
  },
  danger: {
    high: {
      normal: {
        color: lightTheme.neutral0,
        backgroundColor: lightTheme.danger500,
      },
      hover: {
        backgroundColor: lightTheme.danger600,
      },
      active: {
        backgroundColor: lightTheme.danger700,
      },
      disabled: {
        backgroundColor: lightTheme.neutral400,
      },
    },
    medium: {
      normal: {
        color: lightTheme.danger500,
        backgroundColor: lightTheme.danger50,
      },
      hover: {
        color: lightTheme.danger700,
        backgroundColor: lightTheme.danger100,
      },
      active: {
        color: lightTheme.danger900,
        backgroundColor: lightTheme.danger200,
      },
      disabled: {
        color: lightTheme.neutral0,
        backgroundColor: lightTheme.neutral400,
      },
    },
    low: {
      normal: {
        color: lightTheme.danger500,
      },
      hover: {
        color: lightTheme.danger700,
        backgroundColor: lightTheme.danger50,
      },
      active: {
        color: lightTheme.danger900,
        backgroundColor: lightTheme.danger100,
      },
      disabled: {
        color: lightTheme.neutral0,
        backgroundColor: lightTheme.neutral400,
      },
    },
  },
};

module.exports = buttonLightTheme;
