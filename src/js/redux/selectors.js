const { DEFAULT_THEME } = require("../constants");

export function selectCurrentTheme(state) {
  const themes = state.themes;
  const currentThemeName = state.currentTheme;
  const defaultTheme = themes.find((t) => t.name === DEFAULT_THEME);
  const currentTheme = themes.find((t) => t.name === currentThemeName);

  if (!currentTheme) {
    return defaultTheme;
  }

  return currentTheme;
}
