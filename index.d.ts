declare module 'tailwindcss-kit-template' {
  type ColorMode = 'light' | 'dark';

  type NonNeutralColorValue =
    | 50
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900;

  type NeutralColorValue = NonNeutralColorValue | 0 | 1000;

  type Colors = {
    [key in ColorMode]: {
      primary: Record<NonNeutralColorValue, string>;
      danger: Record<NonNeutralColorValue, string>;
      warning: Record<NonNeutralColorValue, string>;
      success: Record<NonNeutralColorValue, string>;
      neutral: Record<NeutralColorValue, string>;
    };
  };

  const colors: Colors;
}
