import React from "react";
import { connect } from "react-redux";
import {
  selectCurrentTheme,
  selectDefaultThemes,
  selectFetchedThemes,
} from "../redux/selectors";
import { fetchThemesRequested, themeSelected } from "../redux/actions";
import Btn from "./Btn";
import SettingsBtn from "./SettingsBtn";
import SettingsThemeList from "./SettingsThemeList";
import { fetchThemes } from "../ThemeApi";

function makeThemeDefinition(theme) {
  return {
    name: theme.name,
    primaryColor: theme.backgroundColor,
    border: theme.borderColor,
    fontColor: theme.expression?.fontColor,
    accent: theme.operationsButtons?.backgroundColor,
    accent2: theme.systemButtonsActive?.backgroundColor,
  };
}

const Settings = ({
  currentTheme,
  defaultThemes,
  fetchedThemes,
  fetchThemesRequested,
  themeSelected,
  closeSettings,
  ...props
}) => {
  const themeClasses = `${currentTheme.backgroundColor} ${currentTheme.expression.fontColor}`; // 648px
  const className = `flex flex-col w-full h-full p-6 lg:max-h-648px lg:max-w-sm ${themeClasses}`;
  const fetchBtnCname = `h-8 mb-4 font-bold w-1/2 mx-auto rounded bg-gray-500 text-gray-900 hover:bg-gray-400 active:bg-gray-600`;

  const defaultThemesDefinitions = defaultThemes.map((t) =>
    makeThemeDefinition(t)
  );
  let fetchedThemesDefinitions = [];
  if (fetchedThemes.length) {
    fetchedThemesDefinitions = fetchedThemes.map((t) => makeThemeDefinition(t));
  }

  return (
    <div className={className}>
      <SettingsBtn clickHandler={() => closeSettings()} settingsIsOpen={true} />
      <div className="mb-4 text-center">Choose theme</div>
      <SettingsThemeList
        themesDefinitions={defaultThemesDefinitions}
        onThemeSelected={(themeName) => themeSelected(themeName)}
      />

      <Btn cname={fetchBtnCname} clickHandler={() => fetchThemesRequested()}>
        fetch new themes
      </Btn>
      {fetchedThemesDefinitions.length ? (
        <SettingsThemeList
          themesDefinitions={fetchedThemesDefinitions}
          onThemeSelected={(themeName) => themeSelected(themeName)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const currentTheme = selectCurrentTheme(state);
  const defaultThemes = selectDefaultThemes(state);
  const fetchedThemes = selectFetchedThemes(state);
  return { currentTheme, defaultThemes, fetchedThemes };
};
export default connect(mapStateToProps, {
  fetchThemesRequested,
  themeSelected,
})(Settings);
