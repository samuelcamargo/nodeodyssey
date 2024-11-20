export interface IBagCharacter {
    id?: number; // Pode ser opcional se o Character for novo
    name: string;
    level: number;
    attack: number;
    defense: number;
    max_health: number; // vida maxima
    agility: number;
    itemType: string;
    id_character: number; // Relacione sempre com o User
}