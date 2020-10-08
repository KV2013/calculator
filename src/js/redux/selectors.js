const { DEFAULT_THEME } = require("../constants");

export function selectCurrentTheme(state) {
  const defaultThemes = state.defaultThemes;
  const fetchedThemes = state.fetchedThemes;
  const currentThemeName = state.currentTheme;
  const defaultTheme = defaultThemes.find((t) => t.name === DEFAULT_THEME);
  let currentTheme = defaultThemes.find((t) => t.name === currentThemeName);

  if (!currentTheme) {
    currentTheme = fetchedThemes.find((t) => t.name === currentThemeName);
  }

  if (!currentTheme) {
    return defaultTheme;
  }

  return currentTheme;
}

export function selectDefaultThemes(state) {
  return state.defaultThemes;
}

export function selectFetchedThemes(state) {
  return state.fetchedThemes;
}
