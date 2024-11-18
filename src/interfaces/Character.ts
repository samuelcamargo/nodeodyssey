import { User } from "../entities/User";
export interface ICharacter {
    id?: number; // Pode ser opcional se o Character for novo
    name: string;
    level: number;
    experience: number;
    attack: number;
    defense: number;
    health: number;
    agility: number;
    role: string;
    id_user: number; // Relacione sempre com o User
}