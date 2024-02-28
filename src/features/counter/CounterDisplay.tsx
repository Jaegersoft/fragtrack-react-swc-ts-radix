import { useContext } from "react";

import { CounterProviderContext } from "./CounterProvider";

function CounterDisplay() {
  const { counter, counterSquared } = useContext(CounterProviderContext);

  return (
    <>
      <div>The value of the count is : {counter}</div>
      <div>The count squared is : {counterSquared}</div>
    </>
  );
}

export default CounterDisplay;
