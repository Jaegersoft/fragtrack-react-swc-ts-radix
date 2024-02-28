import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import CounterDisplay from "./CounterDisplay";
import { CounterProvider } from "./CounterProvider";
import { signal } from "@preact/signals-react";

describe("Text Counter renders correctly", () => {
  test("Test counter display shows the current counter state value", async () => {
    //Act
    const rendered = render(
      <CounterProvider state={{ counter: signal(3), counterSquared: signal(5) }}>
        <CounterDisplay />
      </CounterProvider>
    );

    //Assert
    expect(rendered.getByText("loader-icon")).toBeInTheDocument();
  });
});
