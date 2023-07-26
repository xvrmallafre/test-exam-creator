import { serverAuth$ } from "@builder.io/qwik-auth";
import type { Provider } from "@auth/core/providers";
import Credentials from "@auth/core/providers/credentials";

import { getUserFromCredentials } from "../helpers/user";
import type { UserSessionInterface } from "~/interfaces";

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
  serverAuth$(({ env }) => ({
    secret: env.get("AUTH_SECRET"),
    trustHost: true,
    providers: [
      Credentials({
        async authorize(credentials): Promise<any> {
          if (credentials.username && credentials.password) {
            const userCredentials = {
              username: credentials.username.toString(),
              password: credentials.password.toString(),
            };

            return await getUserFromCredentials(userCredentials);
          }

          return null;
        },
        credentials: {
          username: { label: "Username", type: "text" },
          password: { label: "Password", type: "password" }
        }
      })
    ] as Provider[],
    pages: {
      signIn: "/login/"
    },
    callbacks: {
      session({ session, token }) {
        session.user = token.user as UserSessionInterface;
        return session;
      },
      jwt({ token, user }) {
        if (user) {
          token.user = user;
        }
        return token;
      },
    }
  }));
