import { paths } from "@/config/paths";
import { createBrowserRouter, RouterProvider } from "react-router";
import { NotFoundRoute } from "./routes/not-found";
import { LoginRoute } from "./routes/auth/login";

const createAppRouter = () =>
  createBrowserRouter([
    {
      path: paths.home.path,
      element: <div>HOME PAGE</div>,
    },
    {
      path: paths.auth.register.path,
      element: <div>REGISTER PAGE</div>,
    },
    {
      path: paths.auth.login.path,
      element: <LoginRoute />,
    },
    {
      path: "*",
      element: <NotFoundRoute />,
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();

  return <RouterProvider router={router} />;
};
