import { Character } from "../entities/Character";
import { CharacterRepository } from "../repositories/CharacterRepository";
import { LevelUpService } from "../services/LevelUpService";

export class GiveExperienceToCharacter {
  constructor(private characterRepository: CharacterRepository) {}

  async execute(characterId: number, experience: number): Promise<Character> {
    // Buscar o personagem no repositório
    const character = await this.characterRepository.findById(characterId);
    if (!character) {
      throw new Error("Character not found");
    }

    // Acumular experiência
    character.experience += experience;

    // Verificar e aplicar Level Up
    LevelUpService.levelUpIfNeeded(character);

    // Salvar no repositório
    await this.characterRepository.save(character);

    return character;
  }
}
