import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { type DocumentHead, routeAction$, zod$ } from "@builder.io/qwik-city";
import { PrismaClient } from "@prisma/client";

import { RegisterForm } from "~/components/account/register";
import styles from "../auth-layout.css?inline";

export const useCreateUser = routeAction$(
  async (data) => {
    const prisma = new PrismaClient();
    const user = await prisma.user.create({
      data: {
        name: data.name,
        lastname: data.lastname,
        username: data.username.toLowerCase(),
        email: data.email,
        password: data.password,
      }
    });
    return user;
  },
  zod$((z) => {
    return z.object({
      name: z.string().nonempty(),
      lastname: z.string().optional(),
      username: z.string().nonempty(),
      email: z.string().email().nonempty(),
      password: z.string().min(8),
      passwordConfirmation: z.string().min(8),
    }).refine((data) => { 
      return data.password === data.passwordConfirmation;
    }, { message: "Las contraseñas no coinciden"}
    ).refine(async (data) => {
      const prisma = new PrismaClient();
      const user = await prisma.user.findUnique({
        where: {
          username: data.username.toLowerCase()
        }
      });
      return !user;
    }, { message: "El nombre de usuario ya existe" }
    ).refine(async (data) => {
      const prisma = new PrismaClient();
      const user = await prisma.user.findUnique({
        where: {
          email: data.email
        }
      });
      return !user;
    }, { message: "El correo electrónico ya existe" });

  })
);

export default component$(() => {
  const createUserAction = useCreateUser();
  useStylesScoped$(styles);

  //TODO: Not being able to show all the errors reported by zod.
  //TODO: createUserAction.value?.formErrors has the refined errors
  //TODO: but createUserAction.value?.fieldErrors has the basic validation errors
  //TODO:
  //TODO: A possible solution to this, is create the form from an object, and then 
  //TODO: iterate over the object to show the errors under the field itself.
  //TODO:
  //TODO: Also, in case createUserAction.value?.formErrors has more than one error
  //TODO: has to be iterated over the object to show all the errors.

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
        {createUserAction.status === 400 && (
          <div class="message error">
            {/* {Object.keys(createUserAction.value?.formErrors).map((key) => {
              return <h3 key={key}>{createUserAction.value?.formErrors[key]}</h3>
            })} */}
            {<h3>Ha ocurrido un error. Revisa los datos introducidos y vuelve a intentarlo</h3>}
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
