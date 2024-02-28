import { UserRoute } from "@/routing/routes";

type UserPageProps = {
  route: UserRoute;
};

export function UserPage({ route }: UserPageProps) {
  return <div>User: {route.params.userId}</div>;
}
