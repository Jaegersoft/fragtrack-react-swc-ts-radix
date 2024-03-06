import { Button } from "@mui/material";

import { useCounter } from "./useCounter";

export function CounterButton() {
  const { counter } = useCounter();

  return (
    <Button variant="contained" onClick={() => (counter.value += 1)}>
      Increase the Count
    </Button>
  );
}
