import UserController from "./controller/UserController";

/**
 * All application routes.
 */
export const AppRoutes = [
  {
    path: "/users",
    method: "get",
    action: UserController.getAll
  },
  {
    path: "/users/:id",
    method: "get",
    action: UserController.getById
  }
];
