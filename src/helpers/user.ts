import type { BasicUserInterface, CompleteUserInterface } from "~/interfaces";
import bcrypt from 'bcrypt';

export const getBasicUserFromCompleteUser = (completeUser: CompleteUserInterface): BasicUserInterface => {
    const { username, name, lastname, email } = completeUser;

    return { username, name, lastname, email };
}

export const hashPassword = (password: string): string => {
    return bcrypt.hashSync(password, 5);
}