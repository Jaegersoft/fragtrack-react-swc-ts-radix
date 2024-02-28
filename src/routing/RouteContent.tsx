import { HomePage } from "@/features/home/HomePage";
import { UserListPage } from "@/features/user/UserListPage";
import { UserPage } from "@/features/user/UserPage";

import { useRoute } from "./routes";

export function RouteContent() {
  const route = useRoute();

  return (
    <>
      {route.name === "home" && <HomePage />}
      {route.name === "users" && <UserListPage route={route} />}
      {route.name === "user" && <UserPage route={route} />}
      {route.name === false && "Not Found"}
    </>
  );
}
