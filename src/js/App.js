import React, { useState } from "react";
import ExpressionHistory from "./components/ExpressionHistory";
import Expression from "./components/Expression";
import ButtonsGrid from "./components/ButtonsGrid";
import { EXPRESSION_SYMBOLS_PER_LINE } from "./constants";
import SettingsBtn from "./components/SettingsBtn";
import { connect } from "react-redux";
import { selectCurrentTheme } from "./redux/selectors";
import Settings from "./components/Settings";

const App = ({ theme }) => {
  const [isSettingsOpen, openSettings] = useState(false);
  const themeClasses = `${theme.backgroundColor} ${theme.borderColor}`;
  let className = `flex flex-col w-full h-full px-4 pt-2 pb-20 lg:max-h-648px lg:max-w-sm ${themeClasses}`;
  if (isSettingsOpen) {
    return <Settings closeSettings={() => openSettings(false)} />;
  }
  return (
    <div className={className}>
      <SettingsBtn clickHandler={() => openSettings(true)} />
      <ExpressionHistory />
      <Expression symbolsPerLine={EXPRESSION_SYMBOLS_PER_LINE} />
      <ButtonsGrid />
    </div>
  );
};

const mapStateToProps = (state) => {
  const currentTheme = selectCurrentTheme(state);
  return { theme: currentTheme };
};

export default connect(mapStateToProps)(App);
