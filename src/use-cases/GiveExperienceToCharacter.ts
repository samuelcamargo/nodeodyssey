import { Character } from "../entities/Character";
import { CharacterRepository } from "../repositories/CharacterRepository";
import { ExperienceService } from "../services/ExperienceService";

export class GiveExperienceToCharacter {
  constructor(private characterRepository: CharacterRepository) {}

  async execute(characterId: number, experience: number): Promise<Character> {
    // Buscar o personagem no repositório
    const character = await this.characterRepository.findById(characterId);
    if (!character) {
      throw new Error("Character not found");
    }

    // Adicionar experiência e aplicar level-up
    ExperienceService.addExperience(character, experience);

    // Salvar no repositório
    await this.characterRepository.save(character);

    return character;
  }
}