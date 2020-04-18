const { colorModes } = require('../colors');

const mapFlatThemeToClasses = (theme, callback) =>
  colorModes.reduce(
    (modeClassNames, colorMode) => ({
      ...modeClassNames,
      ...Object.keys(theme[colorMode]).reduce(
        (themeClassNames, themeKey) => ({
          ...themeClassNames,
          ...callback(colorMode, themeKey),
        }),
        {}
      ),
    }),
    {}
  );

const mapNestedThemeToClasses = (theme, callback) =>
  colorModes.reduce(
    (modeClassNames, colorMode) => ({
      ...modeClassNames,
      ...Object.keys(theme[colorMode]).reduce(
        (themeClassNames, themeKey) => ({
          ...themeClassNames,
          ...Object.keys(theme[colorMode][themeKey]).reduce(
            (acc, subThemeKey) => ({
              ...acc,
              ...callback(colorMode, themeKey, subThemeKey),
            }),
            {}
          ),
        }),
        {}
      ),
    }),
    {}
  );

module.exports = {
  mapNestedThemeToClasses,
  mapFlatThemeToClasses,
};
