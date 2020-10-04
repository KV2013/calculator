import React from "react";

function Btn({ cname, ...props }) {
  return <button className={cname}>{props.children}</button>;
}

export default Btn;
