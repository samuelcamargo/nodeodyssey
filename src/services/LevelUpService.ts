import { ICharacter } from "../interfaces/Character";

export class LevelUpService {
  // Regras de crescimento por classe
  static classModifiers = {
    guerreiro: { attack: 5, defense: 10, health: 50, agility: 3 },
    mago: { attack: 12, defense: 2, health: 25, agility: 5 },
    arqueiro: { attack: 15, defense: 3, health: 30, agility: 8 },
    asassino: { attack: 18, defense: 2, health: 25, agility: 10 },
    bardo: { attack: 6, defense: 7, health: 35, agility: 5 },
    Barbaro: { attack: 15, defense: 6, health: 35, agility: 4 },
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

      const roleKey = character.role.toLowerCase() as keyof typeof LevelUpService.classModifiers;
      if (roleKey in LevelUpService.classModifiers) {
          const modifiers = LevelUpService.classModifiers[roleKey];
          character.attack += modifiers.attack;
          character.defense += modifiers.defense;
          character.health += modifiers.health; // vida atual
          character.max_health += modifiers.health; // vida maxima
          character.agility += modifiers.agility;
      }
      
      //Recupera a Vida ao passar de level
      character.health = character.max_health;

    }

  
    return character;
}
}