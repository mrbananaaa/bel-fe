import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { paths } from "@/config/paths";
import { loginInputSchema } from "@/lib/auth";
import type { LoginInput } from "@/lib/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router";

export const LoginForm = () => {
  const { control, handleSubmit } = useForm<LoginInput>({
    resolver: zodResolver(loginInputSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(data: LoginInput) {
    // TODO: Handle login
    console.log(data);
  }

  return (
    <div className="flex flex-col space-y-8">
      <form
        id="form-auth-login"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <Controller
          name="username"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                htmlFor={field.name}
                className="font-head font-medium text-sm text-fg-light capitalize tracking-tighter"
              >
                {field.name}
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Type your username here..."
                autoComplete="off"
                className="border-[1.5px] border-accent px-3 py-5 rounded-lg font-paragraph placeholder:italic"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                htmlFor={field.name}
                className="font-head font-medium text-sm text-fg-light capitalize tracking-tighter"
              >
                {field.name}
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Type your password here..."
                autoComplete="off"
                type="password"
                className="border-[1.5px] border-accent px-3 py-5 rounded-lg font-paragraph placeholder:italic"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </form>

      <div className="flex flex-col space-y-2 font-head tracking-tighter">
        <Button
          type="submit"
          form="form-auth-login"
          className="font-bold py-6 rounded-lg bg-accent cursor-pointer hover:bg-accent/85"
        >
          Login
        </Button>
        <span className="text-sm text-center">
          or,{" "}
          <Link to={paths.auth.register.getHref()} className="text-blue-600">
            sign up here
          </Link>
        </span>
      </div>
    </div>
  );
};
