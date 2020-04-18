const { colorModes } = require('../colors');

const mapFlatThemeToClasses = (theme, callback) =>
  colorModes.map((colorMode) =>
    Object.keys(theme[colorMode]).reduce(
      (classNames, themeKey) => ({
        ...classNames,
        ...callback(colorMode, themeKey),
      }),
      {}
    )
  );

const mapNestedThemeToClasses = (theme, callback) =>
  colorModes.map((colorMode) =>
    Object.keys(theme[colorMode]).reduce(
      (classNames, themeKey) => ({
        ...classNames,
        ...Object.keys(theme[colorMode][themeKey]).reduce(
          (acc, subThemeKey) => ({
            ...acc,
            ...callback(colorMode, themeKey, subThemeKey),
          }),
          {}
        ),
      }),
      {}
    )
  );

module.exports = {
  mapNestedThemeToClasses,
  mapFlatThemeToClasses,
};
