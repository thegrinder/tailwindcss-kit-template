const spacingPlugin = ({ addUtilities, config }) => {
  const spacingConfig = config('theme.spacing');
  const marginUtilities = Object.keys(spacingConfig).map((spacingKey) => ({
    [`.ma-${spacingKey}`]: {
      margin: spacingConfig[spacingKey],
    },
    [`.mv-${spacingKey}`]: {
      marginTop: spacingConfig[spacingKey],
      marginBottom: spacingConfig[spacingKey],
    },
    [`.mh-${spacingKey}`]: {
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
  }));

  const negativeMarginUtilities = Object.keys(spacingConfig).map(
    (spacingKey) => ({
      [`.-mh-${spacingKey}`]: {
        marginRight: `-${spacingConfig[spacingKey]}`,
        marginLeft: `-${spacingConfig[spacingKey]}`,
      },
      [`.-mr-${spacingKey}`]: {
        marginRight: `-${spacingConfig[spacingKey]}`,
      },
      [`.-ml-${spacingKey}`]: {
        marginLeft: `-${spacingConfig[spacingKey]}`,
      },
    })
  );

  const paddingUtilities = Object.keys(spacingConfig).map((spacingKey) => ({
    [`.pa-${spacingKey}`]: {
      padding: spacingConfig[spacingKey],
    },
    [`.pv-${spacingKey}`]: {
      paddingTop: spacingConfig[spacingKey],
      paddingBottom: spacingConfig[spacingKey],
    },
    [`.ph-${spacingKey}`]: {
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
  }));

  addUtilities([...marginUtilities, ...paddingUtilities], ['responsive']);
  addUtilities(negativeMarginUtilities, ['responsive']);
};

module.exports = spacingPlugin;
