import React from "react";
import ExpressionHistory from "./components/ExpressionHistory";
import Expression from "./components/Expression";
import ButtonsGrid from "./components/ButtonsGrid";
import { EXPRESSION_SYMBOLS_PER_LINE } from "./constants";

function App() {
  return (
    <div className="flex flex-col bg-black w-full h-full p-6 lg:h-auto lg:max-w-sm">
      <ExpressionHistory />
      <Expression symbolsPerLine={EXPRESSION_SYMBOLS_PER_LINE} />
      <ButtonsGrid />
    </div>
  );
}

export default App;
