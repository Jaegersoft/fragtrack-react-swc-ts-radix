import { createRouter, defineRoute, param } from "type-route";

export const { RouteProvider, useRoute, routes } = createRouter({
  home: defineRoute("/"),

  users: defineRoute(
    {
      page: param.query.optional.number
    },
    () => "/users"
  ),

  user: defineRoute(
    {
      userId: param.path.string
    },
    (p) => `/user/${p.userId}`
  )
});
