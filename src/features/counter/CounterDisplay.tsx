import { useCounter } from "./useCounter";

export function CounterDisplay() {
  const { counter, counterSquared } = useCounter();

  return (
    <>
      <div>The value of the count is : {counter}</div>
      <div>The count squared is : {counterSquared}</div>
    </>
  );
}
