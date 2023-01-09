import React from "react";
import { calcFunction } from "./calcFunction";

type calcFunctionType = ReturnType<typeof calcFunction>;

export function ReturnTypePage(): JSX.Element {
  const result: calcFunctionType = calcFunction(1, 3);
  return (
    <div>
      <p>addition:{result.addition}</p>
      <p>subtraction:{result.subtraction}</p>
      <p>multiplication:{result.multiplication}</p>
      <p>division:{result.division}</p>
    </div>
  );
}
