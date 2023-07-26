export interface UserInterface {
    id        : string;
    username  : string;
    password  : string;
    name      : string;
    lastname ?: string;
    email     : string;
    role      : string;
    status    : string;
    createdAt : Date;
    updatedAt : Date;
}