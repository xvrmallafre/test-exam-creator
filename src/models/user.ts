import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

import type { CredentialsProps, UserInterface } from '~/interfaces';

export const getUserFromCredentials = async (credentials: CredentialsProps) => {
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
        ? userWithoutPassword 
        : null;
};

export const getUserFromId = async (id: string): Promise<UserInterface> => {
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
        where: {
            id,
        }
    });

    prisma.$disconnect();
    return user as UserInterface;
}