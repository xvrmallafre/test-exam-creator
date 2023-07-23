import { serverAuth$ } from "@builder.io/qwik-auth";
import type { Provider } from "@auth/core/providers";
import Credentials from "@auth/core/providers/credentials";

import { getUserFromCredentials } from "../helpers/user";

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
  serverAuth$(({ env }) => ({
    secret: env.get("AUTH_SECRET"),
    providers: [
      Credentials({
        async authorize(credentials): Promise<any> {
          const userCredentials = {
            username: credentials!.username!.toString(),
            password: credentials!.password!.toString(),
          };

          return await getUserFromCredentials(userCredentials);
        },
        credentials: {
          username: { label: "Username", type: "text" },
          password: { label: "Password", type: "password" }
        },
      })
    ] as Provider[],
    callbacks: {
      async login({ user, account, profile, email, credentials }){
        return true;
      },
      async redirect({ url, baseUrl }) {
        return baseUrl
      },
      async session({ session, user, token }) {
        return session
      },
      async jwt({ token, user, account, profile, isNewUser }) {
        return token
      }
    }
  }));
