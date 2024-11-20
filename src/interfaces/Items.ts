import { Character } from '../entities/Character';
export interface IItems {
    id?: number;
    name: string;
    level: number;
    attack: number;
    defense: number;
    max_health: number;
    agility: number;
    itemType: string;
    id_character?: number;
}