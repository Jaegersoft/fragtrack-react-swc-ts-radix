import { computed, Signal, signal } from "@preact/signals-react";
import { createContext, ReactNode } from "react";

type CounterProviderProps = {
  children: ReactNode;
  state?: CounterProviderState; //Injectable for testability
};

type CounterProviderState = {
  counter: Signal<number>;
  counterSquared: Signal<number>;
};

function createDefaultCounterState(): CounterProviderState {
  const counter = signal(0);
  const counterSquared = computed(() => counter.value * counter.value);

  return { counter, counterSquared };
}

export const CounterProviderContext = createContext<CounterProviderState | null>(null);

export function CounterProvider({ children, state }: CounterProviderProps) {
  const intialState = state ?? createDefaultCounterState();

  return <CounterProviderContext.Provider value={intialState}>{children}</CounterProviderContext.Provider>;
}
