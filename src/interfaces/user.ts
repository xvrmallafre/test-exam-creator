export interface CredentialsUserProps {
    username: string;
    password: string;
}

export interface BasicUserInterface {
    username: string;
    name: string;
    lastname?: string;
    email: string;
}

export interface SessionUserInterface extends BasicUserInterface {
    id: string;
}

export interface CreateUserInterface extends BasicUserInterface {
    password: string;
}

export interface CompleteUserInterface extends BasicUserInterface {
    id: string;
    password: string;
    role: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}