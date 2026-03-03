export const paths = {
  home: {
    path: "/",
    getHref: () => "/",
  },
  auth: {
    register: {
      path: "/auth/register",
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/register${redirectTo ? `?redirecTo=${encodeURIComponent(redirectTo)}` : ""}`,
    },
    login: {
      path: "/auth/login",
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/login${redirectTo ? `?redirecTo=${encodeURIComponent(redirectTo)}` : ""}`,
    },
  },
} as const;
