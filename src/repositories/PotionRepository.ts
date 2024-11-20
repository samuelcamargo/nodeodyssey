import { IPotion } from "../interfaces/Potion";

export class PotionRepository {
    private potions: IPotion[] = [
        {id: 1, name: "Pocao Vermelha", level: 1, life: 20, gold: 10},
        {id: 2, name: "Pocao Amarela", level: 5, life: 50, gold: 20},
        {id: 3, name: "Pocao Laranja", level: 10, life: 100, gold: 40},
        {id: 4, name: "Pocao Branca", level: 20, life: 200, gold: 80},
        {id: 5, name: "Pocao Mistica", level: 50, life: 500, gold: 200},
        {id: 6, name: "Pocao Lendaria", level: 75, life: 1000, gold: 400},
    ]

    findById(id: number): IPotion | undefined {
        return this.potions.find((potions) => potions.id === id);
    }
}