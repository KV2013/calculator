import React from "react";
import { connect } from "react-redux";
import { selectCurrentTheme } from "../redux/selectors";
import Btn from "./Btn";

const SettingsBtn = ({ theme, settingsIsOpen, ...restProps }) => {
  const themeClasses = `${theme.settingsButton.backgroundColor} ${theme.settingsButton.fontColor} ${theme.settingsButton.hover.backgroundColor} ${theme.settingsButton.hover.fontColor} ${theme.settingsButton.active.fontColor} ${theme.settingsButton.active.backgroundColor}`;
  const cName = `text-2xl w-6 h-6 rounded-full leading-none focus:outline-none ${themeClasses}`;
  const charCode = settingsIsOpen ? 8612 : 9881;
  return (
    <Btn cname={cName} {...restProps}>
      {String.fromCharCode(charCode)}
    </Btn>
  );
};

const mapStateToProps = (state) => {
  const currentTheme = selectCurrentTheme(state);
  return { theme: currentTheme };
};
export default connect(mapStateToProps)(SettingsBtn);
