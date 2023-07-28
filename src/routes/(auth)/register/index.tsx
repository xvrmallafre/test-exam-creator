import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { type DocumentHead, routeAction$, zod$ } from "@builder.io/qwik-city";

import { PrismaClient } from "@prisma/client";

import { setNewUser } from "~/models/user";
import { RegisterForm } from "~/components/auth/register";
import styles from "../auth-layout.css?inline";

export const useCreateUser = routeAction$(
  async (data) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordConfirmation, ...userData } = data;
    
    return await setNewUser(userData);
  },
  zod$((z) => {
    return z.object({
      name: z.string().nonempty(),
      lastname: z.string().optional(),
      username: z.string().nonempty().refine(async (field) => {
        const prisma = new PrismaClient();
        const user = await prisma.user.findUnique({
          where: {
            username: field.toLowerCase()
          },
          select: {
            username: true
          }
        });
  
        prisma.$disconnect();
        return !user;
      }, { message: "El nombre de usuario ya existe" }),
      email: z.string().email().nonempty().refine(async (field) => {
        const prisma = new PrismaClient();
        const user = await prisma.user.findUnique({
          where: {
            email: field
          }
        });
        
        prisma.$disconnect();
        return !user;
      }, { message: "El correo electrónico ya existe" }),
      password: z.string().min(8),
      passwordConfirmation: z.string().min(8)
    }).superRefine((field, ctx) => { 
      if (field.password !== field.passwordConfirmation) {
        ctx.addIssue({
          code: "custom",
          message: "Las contraseñas no coinciden",
          path: ["passwordConfirmation"]
        })
      }
    })
  })
);

export default component$(() => {
  const createUserAction = useCreateUser();
  useStylesScoped$(styles);

  return (
    <>
      <div>
          <h1 class="login-title">Crea tu usuario</h1>
      </div>
      <div class="login-content">
        <RegisterForm formAction={createUserAction} />
        {/* TODO: Refactor this section */}
        {createUserAction.status === 200 && (
          <div class="message success">
            <h3>Usuario creado satisfactoriamente!</h3>
          </div>
        )}
        {(createUserAction.status === 400 && createUserAction.value?.formErrors) && (
          <div class="message error">
            {<h3>{createUserAction.value.formErrors}</h3>}
          </div>
        )}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Registro",
  meta: [
    {
      name: "description",
      content: "Créate una cuenta para crearte exámenes tipo test",
    },
  ],
};
