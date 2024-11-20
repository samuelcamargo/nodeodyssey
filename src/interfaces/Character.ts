export interface ICharacter {
    id?: number; // Pode ser opcional se o Character for novo
    name: string;
    level: number;
    experience: number;
    gold: number;
    attack: number;
    defense: number;
    health: number; // vida atual
    max_health: number; // vida maxima
    agility: number;
    role: string;
    id_user: number; // Relacione sempre com o User
}