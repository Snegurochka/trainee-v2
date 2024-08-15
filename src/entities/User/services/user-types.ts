export type TUser = {
    id: string;
    idDoc: string;
    email: string;
    name: string;
    level: number;
    completed: number[];
    token: string;
};

export interface IUserApi extends TUser {
    xp: number;
};