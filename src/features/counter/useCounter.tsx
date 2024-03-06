import { useContext } from "react";

import { CounterProviderContext } from "./CounterProvider";

export function useCounter() {
  const context = useContext(CounterProviderContext);

  if (context == null) {
    throw new Error("useCounter must be used within the context of a CounterProvider");
  }

  return context;
}
