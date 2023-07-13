import { serverAuth$ } from "@builder.io/qwik-auth";
import type { Provider } from "@auth/core/providers";
import Credentials from "@auth/core/providers/credentials";

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
  serverAuth$(({ env }) => ({
    secret: env.get("AUTH_SECRET"),
    trustHost: true,
    providers: [
      Credentials({
        credentials: {
          username: { label: "Username" },
          password: { label: "Password" }
        }
      })
    ] as Provider[],
  }));
