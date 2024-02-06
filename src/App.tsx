import "./app.css";

import { signal } from "@preact/signals-react";
import { Button, Flex } from "@radix-ui/themes";
import { Route } from "type-route";

import eslintLogo from "/eslint.svg";
import preactLogo from "/preact.svg";
import prettierLogo from "/prettier.svg";
import radixUiLogo from "/radix-ui.svg";
import reactLogo from "/react.svg";
import swcLogo from "/swc.svg";
import typeRouteLogo from "/type-route.svg";
import viteLogo from "/vite.svg";

import { routes, useRoute } from "./router";

const count = signal(0);

function App() {
  const route = useRoute();

  return (
    <>
      <Flex direction="row" align="center">
        <img src={viteLogo} alt="Vite logo" />
        <img src={swcLogo} alt="SWC logo" />
        <img src={reactLogo} alt="React logo" />
        <img src={preactLogo} alt="Preact logo" />
        <img src={prettierLogo} alt="Prettier logo" />
        <img src={eslintLogo} alt="ESLint logo" />
        <img src={radixUiLogo} alt="Radix UI logo" />
        <img src={typeRouteLogo} alt="Type Route logo" />
      </Flex>

      <Flex direction="row" pb="5" pt="5">
        <a {...routes.home().link}>Home</a>
        <a {...routes.userList().link}>User List</a>
        <a {...routes.userList({ page: 2 }).link}>User List Page 2</a>
        <a {...routes.user({ userId: "abc" }).link}>User abc</a>
      </Flex>

      <Flex direction="row">
        {route.name === "home" && <HomePage />}
        {route.name === "userList" && <UserListPage route={route} />}
        {route.name === "user" && <UserPage route={route} />}
        {route.name === false && "Not Found"}
      </Flex>

      <Flex direction="row" align="center" pt="9">
        <Button onClick={() => (count.value += 1)}>count is {count}</Button>
      </Flex>
    </>
  );
}

export default App;

function HomePage() {
  return <div>Home Page</div>;
}

function UserListPage({ route }: { route: Route<typeof routes.userList> }) {
  return <div>UserList Page: {route.params.page}</div>;
}

function UserPage({ route }: { route: Route<typeof routes.user> }) {
  return <div>User: {route.params.userId}</div>;
}
