export const screenSizes = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
}

export const palette = {
  common: {
    black: '#141414',
    white: '#ffffff',
  },
  primary: {
    main: '#0EB366',
    light: '#65C99A',
    dark: '#0B8049',
  },
  secondary: {
    light: '#4FA1ED',
    main: '#1E68DC',
    dark: '#2A569A',
  },
  warning: {
    light: '#FDE047',
    main: '#EDC14F',
    dark: '#A16207',
  },
  error: {
    light: '#F78893',
    main: '#FF4554',
    dark: '#C71F2F',
  },
}

export const breakpoints = {
  sm: {
    value: screenSizes.sm,
    up: `@media screen and (min-width : ${screenSizes.sm}px)`,
    down: `@media screen and (max-width : ${screenSizes.sm - 1}px)`,
  },
  md: {
    value: screenSizes.md,
    up: `@media screen and (min-width : ${screenSizes.md}px)`,
    down: `@media screen and (max-width : ${screenSizes.md - 1}px)`,
  },
  lg: {
    value: screenSizes.lg,
    up: `@media screen and (min-width : ${screenSizes.lg}px)`,
    down: `@media screen and (max-width : ${screenSizes.lg - 1}px)`,
  },
  xl: {
    value: screenSizes.xl,
    up: `@media screen and (min-width : ${screenSizes.xl}px)`,
    down: `@media screen and (max-width : ${screenSizes.xl - 1}px)`,
  },
  xxl: {
    value: screenSizes.xxl,
    up: `@media screen and (min-width : ${screenSizes.xxl}px)`,
    down: `@media screen and (max-width : ${screenSizes.xxl - 1}px)`,
  },
}

export const shadows = [
  'none',
  '0px 2px 4px -2px rgba(24, 39, 75, 0.12), 0px 4px 4px -2px rgba(24, 39, 75, 0.08)',
  '0px 4px 6px -4px rgba(24, 39, 75, 0.12), 0px 8px 8px -4px rgba(24, 39, 75, 0.08)',
  '0px 6px 8px -6px rgba(24, 39, 75, 0.12), 0px 8px 16px -6px rgba(24, 39, 75, 0.08)',
  '0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08)',
  '0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1)',
  '0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(24, 39, 75, 0.12)',
  '0px 8px 22px -6px rgba(24, 39, 75, 0.12), 0px 14px 64px -4px rgba(24, 39, 75, 0.12)',
  '0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14)',
]

export const theme = {
  breakpoints,
  shadows,
  palette,
}
