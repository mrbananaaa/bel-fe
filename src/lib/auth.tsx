import z from "zod";

export const loginInputSchema = z.object({
  username: z.string().min(1, "Are u dumb or sumtin?").max(30),
  password: z
    .string()
    .min(6, "6 characters minim u son of a B-")
    .max(21, "21 char max goddamit"),
});

export type LoginInput = z.infer<typeof loginInputSchema>;

export const registerInputSchema = z.object({
  displayName: z.string().min(5, "5 characters at least goddamit").max(255),
  email: z.email("Are you sure that's an email?"),
  username: z.string().min(1, "Are u dumb or sumtin?").max(30),
  password: z
    .string()
    .min(6, "6 characters minim u son of a B-")
    .max(21, "21 char max goddamit"),
});

export type RegisterInput = z.infer<typeof registerInputSchema>;
