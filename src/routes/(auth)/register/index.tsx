import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { type DocumentHead, routeAction$, zod$ } from "@builder.io/qwik-city";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

import { RegisterForm } from "~/components/account/register";
import styles from "../auth-layout.css?inline";

export const useCreateUser = routeAction$(
  async (data, { redirect }) => {
    const prisma = new PrismaClient();
    const hashedPassword = bcrypt.hashSync(data.password, 5);
    await prisma.user.create({
      data: {
        name: data.name.trim(),
        lastname: data.lastname?.trim(),
        username: data.username.toLowerCase(),
        email: data.email.trim(),
        password: hashedPassword,
      }
    });

    prisma.$disconnect();

    redirect(301, "/");
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
