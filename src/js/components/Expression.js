import React from "react";
import { connect } from "react-redux";
import { parseExpressionStack } from "../modules/expressionStack";

const Expression = ({ expressionStack }) => {
  const expressionString = parseExpressionStack(expressionStack);

  return (
    <div id="calculation" className="h-32 text-white text-6xl text-right">
      {expressionString}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { expressionStack: state.expressionStack };
};
export default connect(mapStateToProps)(Expression);
