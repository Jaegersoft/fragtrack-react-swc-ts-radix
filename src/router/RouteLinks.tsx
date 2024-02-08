import { routes } from "./routes";

export function RouteLinks() {
  return (
    <>
      <a {...routes.home().link}>Home</a>
      <a {...routes.users().link}>Users</a>
      <a {...routes.users({ page: 2 }).link}>Users: page 2</a>
      <a {...routes.user({ userId: "abc" }).link}>User: abc</a>
    </>
  );
}
