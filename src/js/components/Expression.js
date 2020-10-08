import React from "react";
import { connect } from "react-redux";
import { parseExpressionStack } from "../modules/expressionStack";
import { selectCurrentTheme } from "../redux/selectors";

const Expression = ({ theme, symbolsPerLine, expressionStack }) => {
  const expressionString = parseExpressionStack(expressionStack);
  let expStringArr = [expressionString];
  const themeClasses = `${theme.expression.fontColor}`;
  return (
    <div
      id="calculation"
      className=" flex flex-col sm:pb-0 pb-4 text-right h-20"
    >
      {expStringArr.map((exp, index, arr) => {
        let fontClass = " text-6xl md:text-6xl sm:text-base";
        if (arr.length > 1 && index < arr.length - 1) {
          fontClass = " text-xl sm:text-base";
        }
        const className = `flex-auto flex items-end justify-end leading-none overflow-hidden ${fontClass} ${themeClasses}`;
        return (
          <div key={index} className={className}>
            <span>{exp}</span>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  const currentTheme = selectCurrentTheme(state);
  return { theme: currentTheme, expressionStack: state.expressionStack };
};
export default connect(mapStateToProps)(Expression);
