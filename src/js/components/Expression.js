import React from "react";
import { connect } from "react-redux";
import { parseExpressionStack } from "../modules/expressionStack";
import { selectCurrentTheme } from "../redux/selectors";

const Expression = ({ theme, symbolsPerLine, expressionStack }) => {
  const expressionString = parseExpressionStack(expressionStack);
  let expStringArr = [expressionString];
  if (expressionString.length > symbolsPerLine) {
    expStringArr = [
      expressionString.slice(0, expressionString.length - symbolsPerLine),
      expressionString.slice(-symbolsPerLine),
    ];
  }

  const themeClasses = `${theme.expression.fontColor}`;
  return (
    <div id="calculation" className="h-32 flex flex-col pb-4 text-right">
      {expStringArr.map((exp, index, arr) => {
        let fontClass = " text-6xl ";
        if (arr.length > 1 && index < arr.length - 1) {
          fontClass = " text-4xl ";
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
