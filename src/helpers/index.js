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

const alpha = (hslColor, num) =>
  hslColor.replace(')', `, ${num})`).replace('hsl', 'hsla');

const createBoxShadow = (color) => `0 0 0 3px ${color}`;

const toDashCase = (camel) =>
  camel.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);

const convertToDocsTable = (stylesObj) =>
  Object.keys(stylesObj).reduce(
    (acc, className) => ({
      ...acc,
      [className.replace('.', '')]: Object.keys(stylesObj[className]).map(
        (property) =>
          `${toDashCase(property)}: ${stylesObj[className][property]}`
      ),
    }),
    {}
  );

module.exports = {
  mapNestedThemeToClasses,
  mapFlatThemeToClasses,
  alpha,
  createBoxShadow,
  convertToDocsTable,
};
