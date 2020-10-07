import React from "react";
import { connect } from "react-redux";
import { selectCurrentTheme, selectThemes } from "../redux/selectors";
import SettingsBtn from "./SettingsBtn";

const Settings = ({ currentTheme, themes, ...props }) => {
  const themeClasses = `bg-black text-white`; // 648px
  const className = `flex flex-col w-full h-full p-6 lg:max-h-648px lg:max-w-sm ${themeClasses}`;
  const themesDefinitions = [
    {
      name: "dark",
      primaryColor: "bg-black",
      border: "border-black",
      fontColor: "text-white",
      accent: "bg-orange-400",
      accent2: "bg-teal-400",
    },
    {
      name: "white",
      primaryColor: "bg-gray-300",
      border: "border-gray-300",
      fontColor: "text-black",
      accent: "bg-orange-400",
      accent2: "bg-teal-400",
    },
  ];
  return (
    <div className={className}>
      <SettingsBtn clickHandler={() => console.log()} />
      <div className="mb-4 text-center">Choose theme</div>
      <ul>
        {themesDefinitions.map((def, index) => {
          const defClassName = `p-2 w-20 text-center text-lg font-bold ${def.fontColor}`;
          const primaryClassName = `w-8 h-8 rounded border-2 ${def.primaryColor} ${def.border}`;
          const accentClassName = `w-6 h-6 rounded-full ${def.accent}`;
          const accent2ClassName = `w-4 h-4 rounded-full ${def.accent2}`;
          return (
            <li key={index} className="mb-4 bg-gray-700 rounded">
              <div className="h-16 flex items-center p-2 ">
                <div className={defClassName}>{def.name}</div>
                <div className="flex flex-auto items-center justify-around px-8">
                  <div className={primaryClassName}></div>
                  <div className={accentClassName}></div>
                  <div className={accent2ClassName}></div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  const currentTheme = selectCurrentTheme(state);
  const themes = selectThemes(state);
  return { currentTheme, themes };
};
export default connect(mapStateToProps, {})(Settings);
