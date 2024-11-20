import { Character } from "../entities/Character";
import { CharacterRepository } from "../repositories/CharacterRepository";
import { RegenLifeService } from "../services/RegenLifeService";
import { PotionRepository } from '../repositories/PotionRepository';

export class UsePotionInCharacter {
  constructor(private characterRepository: CharacterRepository, private potionRepository: PotionRepository) {}

  async execute(characterId: number, potion: number): Promise<Character> {
    // Buscar o personagem no repositório
    const character = await this.characterRepository.findById(characterId);
    const potionStats = await this.potionRepository.findById(potion);
    if (!character) {
        throw new Error("Character not found");
    }

    if (!potionStats) {
        throw new Error("Character not found");
    }

    if(character.gold < potionStats.gold){
        throw new Error("Gold not found");
    }

    // regenera a vida
    RegenLifeService.usePotion(character,potionStats.life,potionStats.gold);

    // Salvar no repositório
    await this.characterRepository.save(character);

    return character;
  }
}