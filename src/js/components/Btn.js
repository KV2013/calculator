import React from "react";

function Btn({ cname, clickHandler, ...props }) {
  return (
    <button className={cname} onClick={clickHandler}>
      {props.children}
    </button>
  );
}

export default Btn;
