import z from "zod";
import { configureAuth } from "react-query-auth";
import type { AuthResponse, User } from "@/types/api";
import { api } from "./api-client";
import * as React from "react";
import { Navigate, useLocation } from "react-router";
import { paths } from "../config/paths";

const getUser = async (): Promise<User> => {
  const response = await api.get("/auth/user");

  const dummyUser: User = {
    id: "23812980sa8s90123",
    displayName: "Astaaa",
    email: "mailme.mrbananaaaid@gmail.com",
    username: "mrbananaaa",
    password: "pass",
    createdAt: 1,
  };

  return dummyUser;
};

const logout = (): Promise<void> => {
  return api.post("/auth/logout");
};

export const loginInputSchema = z.object({
  username: z.string().min(1, "Are u dumb or sumtin?").max(30),
  password: z
    .string()
    .min(6, "6 characters minim u son of a B-")
    .max(21, "21 char max goddamit"),
});

export type LoginInput = z.infer<typeof loginInputSchema>;

const loginWithEmailAndPassword = (data: LoginInput): Promise<AuthResponse> => {
  return api.post("/auth/login", data);
};

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

const registerWithEmailAndPassword = (
  data: RegisterInput,
): Promise<AuthResponse> => {
  return api.post("/auth/register", data);
};

const authConfig = {
  userFn: getUser,
  loginFn: async (data: LoginInput) => {
    const response = await loginWithEmailAndPassword(data);
    return response.user;
  },
  registerFn: async (data: RegisterInput) => {
    const response = await registerWithEmailAndPassword(data);
    return response.user;
  },
  logoutFn: logout,
};

export const { useUser, useLogin, useLogout, useRegister, AuthLoader } =
  configureAuth(authConfig);

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useUser();
  const location = useLocation();

  if (!user.data) {
    return (
      <Navigate to={paths.auth.login.getHref(location.pathname)} replace />
    );
  }

  return children;
};
