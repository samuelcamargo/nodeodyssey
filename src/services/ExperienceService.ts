import { Character } from "../entities/Character";
import { LevelUpService } from "./LevelUpService";

export class ExperienceService {
  // Método para adicionar experiência e aplicar level-up, se necessário
  static addExperience(character: Character, experience: number): Character {
    // Adiciona experiência
    character.experience += experience;

    // Verifica e aplica level-up
    LevelUpService.levelUpIfNeeded(character);

    return character;
  }
}