import { Stack } from "@mui/material";

import { CounterButton } from "./CounterButton";
import { CounterDisplay } from "./CounterDisplay";

export function CounterPage() {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 2, mb: 2 }}>
      <CounterButton />
      <CounterDisplay />
    </Stack>
  );
}
