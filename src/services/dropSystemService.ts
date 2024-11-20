import { BagCharacter } from "../entities/BagCharacter";
import { ItensRepository } from "../repositories/ItensRepository";
import { BagCharacterRepository } from "../repositories/BagCharacterRepository";
import { Character } from "../entities/Character";

export class dropSystemService {

  static async drop(character: Character, qtdItem: number, monsterLevel: number): Promise<BagCharacter[]> {
    const droppedItems: BagCharacter[] = [];
    const itemRepo = new ItensRepository();
    const bagRepo = new BagCharacterRepository();

    // Obtém todos os itens disponíveis
    const items = itemRepo.getAllMaxLevel(monsterLevel);
      const chance = Math.random(); // Chance de drop (por exemplo, 30%)
      if (chance <= 1) {
        // Selecionar um item aleatório
        const randomIndex = Math.floor(Math.random() * items.length);


        const randomItem = items[randomIndex];

        // Criar o item como uma instância de BagCharacter
        const newItem = new BagCharacter();
        newItem.name = randomItem.name;
        newItem.level = randomItem.level;
        newItem.attack = randomItem.attack;
        newItem.defense = randomItem.defense;
        newItem.max_health = randomItem.max_health;
        newItem.agility = randomItem.agility;
        newItem.itemType = randomItem.itemType;
        newItem.id_character = character.id;
        // Salvar no banco
        await bagRepo.save(newItem);

        // Adicionar à lista de itens dropados
        droppedItems.push(newItem);
      }

    return droppedItems;
  }
}