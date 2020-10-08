import React from "react";
import Btn from "./Btn";

const SettingsThemeList = ({ themesDefinitions, onThemeSelected }) => {
  return (
    <ul className="mb-4">
      {themesDefinitions.map((def, index) => {
        const defClassName = `p-2 w-20 text-center text-lg font-bold ${def.fontColor}`;
        const primaryClassName = `w-8 h-8 rounded border-2 ${def.primaryColor} ${def.border}`;
        const accentClassName = `w-6 h-6 rounded-full ${def.accent}`;
        const accent2ClassName = `w-4 h-4 rounded-full ${def.accent2}`;
        return (
          <li key={index} className="mb-4 bg-gray-700 rounded">
            <Btn
              cname="w-full focus:outline-none focus:shadow-outline"
              clickHandler={() => onThemeSelected(def.name)}
            >
              <div className="h-16 flex items-center p-2 ">
                <div className={defClassName}>{def.name}</div>
                <div className="flex flex-auto items-center justify-around px-8">
                  <div className={primaryClassName}></div>
                  <div className={accentClassName}></div>
                  <div className={accent2ClassName}></div>
                </div>
              </div>
            </Btn>
          </li>
        );
      })}
    </ul>
  );
};

export default SettingsThemeList;
