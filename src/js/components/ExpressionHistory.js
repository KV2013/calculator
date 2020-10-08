import React from "react";
import { connect } from "react-redux";
import { parseExpressionStack } from "../modules/expressionStack";
import { selectCurrentTheme } from "../redux/selectors";

const ExporessionHistory = ({ theme, expressionHistory }) => {
  const expressions = expressionHistory.map((exp) => {
    return parseExpressionStack(exp);
  });
  const className = `h-16 text-right flex items-end justify-end overflow-hidden ${theme.history.fontColor}`;
  return (
    <div id="history" className={className}>
      <ul className="h-full">
        {expressions.map((exp, index) => {
          return (
            <li key={index} className="leading-5">
              {exp}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  const currentTheme = selectCurrentTheme(state);
  return { theme: currentTheme, expressionHistory: state.history };
};
export default connect(mapStateToProps)(ExporessionHistory);
