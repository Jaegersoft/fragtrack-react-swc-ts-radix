import { signal } from "@preact/signals-react";
import { render } from "@testing-library/react";

import { CounterDisplay } from "./CounterDisplay";
import { CounterProvider } from "./CounterProvider";

describe("Test that CounterDisplay renders correctly", () => {
  test("Test counter display shows the current counter state value", () => {
    //Act
    const rendered = render(
      <CounterProvider state={{ counter: signal(3), counterSquared: signal(5) }}>
        <CounterDisplay />
      </CounterProvider>
    );

    //Assert
    expect(rendered.getByText(/The value of the count is : 3/)).toBeInTheDocument();
  });
});
