import { userGetAllAction } from "./controller/UserGetAllAction";
import { userGetByIdAction } from "./controller/UserGetByIdAction";

/**
 * All application routes.
 */
export const AppRoutes = [
  {
    path: "/users",
    method: "get",
    action: userGetAllAction
  },
  {
    path: "/users/:id",
    method: "get",
    action: userGetByIdAction
  }
];
