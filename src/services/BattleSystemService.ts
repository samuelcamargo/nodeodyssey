import { Character } from "../entities/Character";
import { IMonster } from "../interfaces/Monster";
import { ExperienceService } from "./ExperienceService";

export class BattleSystem {
    static resolveBattle(
        character: Character,
        monster: IMonster
    ): { winner: string; character: Character; monster: IMonster } {
        // Criar cópias para manipulação durante a batalha
        const characterState: Character = {
            ...character,
            id_user: character.id_user || 0, // Garantir que id_user seja definido
        };
        const monsterState: IMonster = { ...monster };

        // Determinar quem ataca primeiro com base na agilidade
        const characterFirst = character.agility >= monster.agility;

        // Loop da batalha até que a vida de um chegue a 0
        while (characterState.health > 0 && monsterState.health > 0) {
            if (characterFirst) {
                // Personagem ataca primeiro
                monsterState.health -= Math.max(characterState.attack - monsterState.defense, 1);
                if (monsterState.health <= 0) break;
                // Monstro ataca
                characterState.health -= Math.max(monsterState.attack - characterState.defense, 1);
            } else {
                // Monstro ataca primeiro
                characterState.health -= Math.max(monsterState.attack - characterState.defense, 1);
                if (characterState.health <= 0) break;
                // Personagem ataca
                monsterState.health -= Math.max(characterState.attack - monsterState.defense, 1);
            }
        }

        // Determinar o vencedor e atribuir experiência se o personagem vencer
        if (characterState.health > 0) {
            ExperienceService.addExperience(characterState, monsterState.experienceGiven);
            return {
                winner: "character",
                character: characterState,
                monster: monsterState,
            };
        } else {
            return {
                winner: "monster",
                character: characterState,
                monster: monsterState,
            };
        }
    }
}
