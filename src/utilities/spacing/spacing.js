const getPaddingClassNames = (spacingConfig) => {
  const paddingUtilities = Object.keys(spacingConfig).reduce(
    (acc, spacingKey) => ({
      ...acc,
      [`.p-${spacingKey}`]: {
        padding: spacingConfig[spacingKey],
      },
      [`.py-${spacingKey}`]: {
        paddingTop: spacingConfig[spacingKey],
        paddingBottom: spacingConfig[spacingKey],
      },
      [`.px-${spacingKey}`]: {
        paddingRight: spacingConfig[spacingKey],
        paddingLeft: spacingConfig[spacingKey],
      },
      [`.pt-${spacingKey}`]: {
        paddingTop: spacingConfig[spacingKey],
      },
      [`.pr-${spacingKey}`]: {
        paddingRight: spacingConfig[spacingKey],
      },
      [`.pb-${spacingKey}`]: {
        paddingBottom: spacingConfig[spacingKey],
      },
      [`.pl-${spacingKey}`]: {
        paddingLeft: spacingConfig[spacingKey],
      },
    }),
    {}
  );

  return paddingUtilities;
};

const getMarginClassNames = (spacingConfig) => {
  const marginUtilities = Object.keys(spacingConfig).reduce(
    (acc, spacingKey) => ({
      ...acc,
      [`.m-${spacingKey}`]: {
        margin: spacingConfig[spacingKey],
      },
      [`.my-${spacingKey}`]: {
        marginTop: spacingConfig[spacingKey],
        marginBottom: spacingConfig[spacingKey],
      },
      [`.mx-${spacingKey}`]: {
        marginRight: spacingConfig[spacingKey],
        marginLeft: spacingConfig[spacingKey],
      },
      [`.mt-${spacingKey}`]: {
        marginTop: spacingConfig[spacingKey],
      },
      [`.mr-${spacingKey}`]: {
        marginRight: spacingConfig[spacingKey],
      },
      [`.mb-${spacingKey}`]: {
        marginBottom: spacingConfig[spacingKey],
      },
      [`.ml-${spacingKey}`]: {
        marginLeft: spacingConfig[spacingKey],
      },
    }),
    {}
  );

  const negativeMarginUtilities = Object.keys(spacingConfig).reduce(
    (acc, spacingKey) => ({
      ...acc,
      [`.-mx-${spacingKey}`]: {
        marginRight: `-${spacingConfig[spacingKey]}`,
        marginLeft: `-${spacingConfig[spacingKey]}`,
      },
    }),
    {}
  );

  return {
    ...marginUtilities,
    ...negativeMarginUtilities,
  };
};

const spacing = ({ addUtilities, config }) => {
  const paddingClassNames = getPaddingClassNames(config('theme.spacing'));
  const marginClassNames = getMarginClassNames(config('theme.spacing'));
  addUtilities([paddingClassNames, marginClassNames], ['responsive']);
};

module.exports = {
  spacing,
  getMarginClassNames,
  getPaddingClassNames,
};
