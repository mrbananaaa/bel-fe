import { paths } from "@/config/paths";
import { createBrowserRouter, RouterProvider } from "react-router";
import { NotFoundRoute } from "./routes/not-found";
import { LoginRoute } from "./routes/auth/login";
import { RegisterRoute } from "./routes/auth/register";
import { ProtectedRoute } from "@/lib/auth";

const createAppRouter = () =>
  createBrowserRouter([
    {
      path: paths.home.path,
      element: (
        <ProtectedRoute>
          <div>HOME PAGE</div>
        </ProtectedRoute>
      ),
    },
    {
      path: paths.auth.register.path,
      element: <RegisterRoute />,
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
