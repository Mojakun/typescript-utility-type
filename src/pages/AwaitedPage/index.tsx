import React from "react";
import getData from "./getData";

type A = Awaited<Promise<string>>;
// type A = string;

type B = Awaited<Promise<Promise<number>>>;
// type B = number;

type C = Awaited<boolean | Promise<number>>;
// type C = number | boolean;

type Data = Awaited<ReturnType<typeof getData>>;

export function AwaitedPage(): JSX.Element {
  const string: A = "AwaitedPage";
  const num: B = 1;
  const boolean: C = false;
  const data: Data = { id: "testId", name: "testName" };
  return (
    <div>
      <p>type:A/{string}</p>
      <p>type:B/{num}</p>
      <p>type:C/{boolean ? "true" : "false"}</p>
      <p>type:DataId/{data.id}</p>
      <p>type:DataName/{data.name}</p>
    </div>
  );
}
