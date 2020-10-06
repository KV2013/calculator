import React from "react";
import { connect } from "react-redux";
import { parseExpressionStack } from "../modules/expressionStack";

const ExporessionHistory = ({ expressionHistory }) => {
  console.log("ExpressionHistory Component", { expressionHistory });
  const expressions = expressionHistory.map((exp) => {
    return parseExpressionStack(exp);
  });
  return (
    <div id="history" className="h-16 text-right text-white">
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
  return { expressionHistory: state.history };
};
export default connect(mapStateToProps)(ExporessionHistory);
