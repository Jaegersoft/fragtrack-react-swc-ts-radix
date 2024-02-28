import { useContext } from "react";

import { Button } from "../shared/components/Button";
import { CounterProviderContext } from "./CounterProvider";

export function CounterButton() {
  const { counter } = useContext(CounterProviderContext);

  return (
    <Button variant="destructive" onClick={() => (counter.value += 1)}>
      Increase the Count
    </Button>
  );
}
