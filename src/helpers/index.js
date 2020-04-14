const { colorModes } = require('../colors');

const mapThemeToClasses = (theme, callback) =>
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
  mapThemeToClasses,
};
