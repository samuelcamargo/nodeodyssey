import { Character } from "../entities/Character";
import { ICharacter } from "../interfaces/Character";

export class LevelUpService {
  // Regras de crescimento por classe
  static classModifiers = {
    guerreiro: { attack: 5, defense: 4, health: 10, agility: 2 },
    mago: { attack: 7, defense: 2, health: 5, agility: 4 },
    arqueiro: { attack: 5, defense: 3, health: 7, agility: 6 },
  };

  // Função para calcular o XP necessário para o próximo nível
  static calculateExperienceForNextLevel(level: number): number {
    const XP_BASE = 100;
    const XP_FACTOR = 1.2;
    return Math.floor(XP_BASE * Math.pow(level, XP_FACTOR));
  }

  // Função para verificar e executar o Level-Up
  static levelUpIfNeeded(character: ICharacter): ICharacter {
    const requiredXP = LevelUpService.calculateExperienceForNextLevel(character.level);

    while (character.experience >= requiredXP) {
      character.experience -= requiredXP; // Subtrai a experiência necessária para o próximo nível
      character.level += 1; // Incrementa o nível
    }

    const roleKey = character.role.toLowerCase() as keyof typeof LevelUpService.classModifiers;
    if (roleKey in LevelUpService.classModifiers) {
        const modifiers = LevelUpService.classModifiers[roleKey];
        character.attack += modifiers.attack;
        character.defense += modifiers.defense;
        character.health += modifiers.health;
        character.agility += modifiers.agility;
    }

    return character;
}
}