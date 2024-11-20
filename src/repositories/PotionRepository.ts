import { IPotion } from "../interfaces/Potion";

export class PotionRepository {
    private potions: IPotion[] = [
        {id: 1, name: "Pocao vermelha", level: 1, life: 10, gold: 5},
        {id: 2, name: "Pocao Amarela", level: 5, life: 50, gold: 15},
        {id: 3, name: "Pocao Laranja", level: 10, life: 100, gold: 25},
        {id: 4, name: "Pocao Branca", level: 20, life: 250, gold: 50},
    ]

    findById(id: number): IPotion | undefined {
        return this.potions.find((potions) => potions.id === id);
    }
}