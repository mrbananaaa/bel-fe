import { AuthLayout } from "@/components/layouts/auth-layout";

export const LoginRoute = () => {
  return (
    <AuthLayout>
      <div className="relative">
        <div className="absolute -top-5 -left-5 font-head font-bold text-accent text-3xl tracking-[-0.06em]">
          BEL
        </div>

        <div className="flex flex-col space-y-10 py-12">
          <div className="flex flex-col space-y-2">
            <h1 className="font-head font-bold text-4xl tracking-tighter">
              Welcome to <br /> Beyond <span className="text-accent">Echo</span>{" "}
              Link,
            </h1>
            <p className="font-paragraph text-paragraph">
              Please sign in before connecting to the link.
            </p>
          </div>

          <div>FORM</div>
        </div>
      </div>
    </AuthLayout>
  );
};
