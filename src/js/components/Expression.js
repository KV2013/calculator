import React from "react";
import { connect } from "react-redux";
import { parseExpressionStack } from "../modules/expressionStack";

const Expression = ({ expressionStack }) => {
  const expressionString = parseExpressionStack(expressionStack);

  return (
    <div
      id="calculation"
      className="h-32 flex flex-col pb-4
     text-white text-right"
    >
      {/* <div className="flex-none flex items-end justify-end text-4xl leading-none">
        <span>{expressionString}</span>
      </div> */}
      <div className="flex-auto flex items-end justify-end text-6xl leading-none">
        <span>{expressionString}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { expressionStack: state.expressionStack };
};
export default connect(mapStateToProps)(Expression);
