import { CounterPage } from "@/features/counter/CounterPage";
import { HomePage } from "@/features/home/HomePage";

import { useRoute } from "./routes";

export function RouteContent() {
  const route = useRoute();

  return (
    <>
      {route.name === "home" && <HomePage />}
      {route.name === "counter" && <CounterPage />}
      {route.name === false && "Not Found"}
    </>
  );
}
