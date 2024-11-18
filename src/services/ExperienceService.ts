import { ICharacter } from "../interfaces/Character";
import { LevelUpService } from "./LevelUpService";

export class ExperienceService {
  static addExperience(character: ICharacter, experience: number): ICharacter {
    // Atualiza diretamente o objeto character
    character.experience += experience;

    // Aplica o level up se necessário
    LevelUpService.levelUpIfNeeded(character);

    return character; // Retorna o próprio character modificado
  }
}