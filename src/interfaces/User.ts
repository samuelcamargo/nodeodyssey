export interface IUser {
    id?: number;
    name: string;
    login: string;
    senha?: string; // ? Opcional para evitar expor a senha
}  