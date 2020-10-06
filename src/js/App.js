import React from "react";
import ExpressionHistory from "./components/ExpressionHistory";
import Expression from "./components/Expression";
import ButtonsGrid from "./components/ButtonsGrid";

function App() {
  return (
    <div className="flex flex-col bg-black w-full h-full p-6 lg:h-auto lg:max-w-sm">
      <ExpressionHistory />
      <Expression />
      <ButtonsGrid />
    </div>
  );
}

export default App;
