import { ICharacter } from "../interfaces/Character";
import { LevelUpService } from "./LevelUpService";

export class GoldService {
  static addgold(character: ICharacter, gold: number): ICharacter {
    // Atualiza diretamente o objeto character
    character.gold += gold;
    
    return character; // Retorna o próprio character modificado
  }
}