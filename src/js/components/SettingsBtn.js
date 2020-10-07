import React from "react";
import { connect } from "react-redux";
import { selectCurrentTheme } from "../redux/selectors";
import Btn from "./Btn";

const SettingsBtn = ({ theme }) => {
  const themeClasses = `${theme.settingsButton.backgroundColor} ${theme.settingsButton.fontColor} ${theme.settingsButton.hover.backgroundColor} ${theme.settingsButton.active.fontColor} ${theme.settingsButton.active.backgroundColor}`;
  const cName = `text-2xl w-6 h-6 rounded-full leading-none focus:outline-none ${themeClasses}`;
  return (
    <Btn clickHandler={() => alert("open settings")} cname={cName}>
      {String.fromCharCode(9881)}
    </Btn>
  );
};

const mapStateToProps = (state) => {
  const currentTheme = selectCurrentTheme(state);
  return { theme: currentTheme };
};
export default connect(mapStateToProps)(SettingsBtn);
