import React from "react";
import { connect } from "react-redux";

const ExporessionHistory = ({ expressionHistory }) => {
  return (
    <div id="history" className="h-16 text-right text-white">
      14-77/2-3000-1175.5=
    </div>
  );
};

const mapStateToProps = (state) => {
  return { expressionHistory: state.expressionHistory };
};
export default connect(mapStateToProps)(ExporessionHistory);
