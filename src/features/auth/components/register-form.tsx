import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { paths } from "@/config/paths";
import { registerInputSchema, type RegisterInput } from "@/lib/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router";

export const RegisterForm = () => {
  const { control, handleSubmit } = useForm<RegisterInput>({
    resolver: zodResolver(registerInputSchema),
    defaultValues: {
      displayName: "",
      email: "",
      username: "",
      password: "",
    },
  });

  function onSubmit(data: RegisterInput) {
    // TODO: Handle register
    console.log(data);
  }

  return (
    <div className="flex flex-col space-y-8">
      <form
        id="form-auth-register"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <Controller
          name="displayName"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                htmlFor={field.name}
                className="font-head font-medium text-sm text-fg-light capitalize tracking-tighter"
              >
                Display Name
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Type your display name here..."
                autoComplete="off"
                className="border-[1.5px] border-accent px-3 py-5 rounded-lg font-paragraph placeholder:italic"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="email"
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
                placeholder="Type your email here..."
                autoComplete="off"
                type="email"
                className="border-[1.5px] border-accent px-3 py-5 rounded-lg font-paragraph placeholder:italic"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
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
          form="form-auth-register"
          className="font-bold py-6 rounded-lg bg-accent cursor-pointer hover:bg-accent/85"
        >
          Register
        </Button>
        <span className="text-sm text-center">
          have an account?{" "}
          <Link to={paths.auth.login.getHref()} className="text-blue-600">
            sign in here
          </Link>
        </span>
      </div>
    </div>
  );
};
