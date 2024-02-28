import { signal } from "@preact/signals-react";
import CounterDisplay from "./CounterDisplay";
import { CounterProvider } from "./CounterProvider";
import { render } from "@testing-library/react";

describe("Text Counter renders correctly", () => {
  test("Test counter display shows the current counter state value", async () => {
    //Act
    const rendered = render(
      <CounterProvider state={{ counter: signal(3), counterSquared: signal(5) }}>
        <CounterDisplay />
      </CounterProvider>
    );

    //Assert
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    expect(rendered.getByText("loader-icon")).toBeInTheDocument();
    expect(rendered.getByAltText("loader-icon")).toBeInTheDocument();
  });
});
