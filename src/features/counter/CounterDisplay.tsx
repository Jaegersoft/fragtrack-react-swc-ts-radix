import { useContext } from "react";

import { CounterProviderContext } from "./CounterProvider";

export function CounterDisplay() {
  const { counter, counterSquared } = useContext(CounterProviderContext);

  return (
    <>
      <div>The value of the count is : {counter}</div>
      <div>The count squared is : {counterSquared}</div>
    </>
  );
}
