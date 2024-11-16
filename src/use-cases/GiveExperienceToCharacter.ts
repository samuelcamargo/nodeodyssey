import { Character } from "../entities/Character";
import { CharacterRepository } from "../repositories/CharacterRepository";

export class GiveExperienceToCharacter {
    constructor(private characterRepository: CharacterRepository) {}
  
    async execute(characterId: number, experience: number): Promise<Character> {
      // Buscar o personagem
      const character = await this.characterRepository.findById(characterId);
      if (!character) {
        throw new Error("Character not found");
      }
  
      // Acumular experiência
      character.experience += experience;
  
      // Salvar no repositório
      await this.characterRepository.save(character);
  
      return character;
    }
  }  