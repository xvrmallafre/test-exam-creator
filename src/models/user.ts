import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

import { hashPassword, getBasicUserFromCompleteUser } from '~/helpers/user';
import type { CredentialsUserProps, BasicUserInterface, CreateUserInterface, CompleteUserInterface } from '~/interfaces';

export const setNewUser = async (user: CreateUserInterface): Promise<BasicUserInterface | null> => {
    const prisma = new PrismaClient();
    let newUser = null;

    try {
        newUser = await prisma.user.create({
            data: {
                ...user,
                username: user.username.toLowerCase(),
                password: hashPassword(user.password),
            }
        });
    } catch (error) {
        //TODO: Save error in a log file
        console.log(error);
        return null;
    }

    prisma.$disconnect();

    return getBasicUserFromCompleteUser(newUser as CompleteUserInterface);
}

export const getUserFromCredentials = async (credentials: CredentialsUserProps): Promise<BasicUserInterface | null> => {
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
        where: {
            username: credentials.username.toLowerCase(),
        },
        select: {
            id: true,
            username: true,
            name: true,
            lastname: true,
            email: true,
            password: true,
        },
    });

    prisma.$disconnect();
    const { password, ...userWithoutPassword } = user || {};

    return ((password && credentials.password)
        && bcrypt.compareSync(credentials.password, password)) 
        ? userWithoutPassword as BasicUserInterface
        : null;
};

export const getUserFromId = async (id: string): Promise<CompleteUserInterface> => {
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
        where: {
            id,
        }
    });

    prisma.$disconnect();

    return user as CompleteUserInterface;
}