import { AuthLayout } from "@/components/layouts/auth-layout";
import { paths } from "@/config/paths";
import { RegisterForm } from "@/features/auth/components/register-form";
import { Link } from "react-router";

export const RegisterRoute = () => {
  return (
    <AuthLayout>
      <div className="relative">
        <div className="absolute -top-3 -left-5 font-head font-bold text-accent text-3xl tracking-[-0.06em] selection:bg-accent selection:text-white">
          <Link to={paths.home.getHref()}> BEL</Link>
        </div>

        <div className="flex flex-col pt-12 space-y-20">
          <div className="flex flex-col space-y-0 mt-8 text-center">
            <h1 className="font-head font-bold text-4xl tracking-tighter selection:bg-accent">
              Create An Account
            </h1>
            <p className="font-paragraph text-paragraph selection:text-white selection:bg-paragraph">
              Sign Up and tell ur friend something.
            </p>
          </div>

          <RegisterForm />
        </div>
      </div>
    </AuthLayout>
  );
};
