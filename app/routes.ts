import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("mask1", "routes/mask1.tsx"),
] satisfies RouteConfig;
