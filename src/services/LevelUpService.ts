import { Character } from "../entities/Character";

export class LevelUpService {
    // Função para calcular o XP necessário para o próximo nível
    static calculateExperienceForNextLevel(level: number): number {
        const XP_BASE = 100; // XP base inicial
        const XP_FACTOR = 1.2; // Fator de dificuldade crescente
        return Math.floor(XP_BASE * Math.pow(level, XP_FACTOR));
    }

    // Função para verificar e executar o Level Up
    static levelUpIfNeeded(character: Character): Character {
        const requiredXP = LevelUpService.calculateExperienceForNextLevel(character.level);

        // Loop para suportar múltiplos level-ups se o personagem acumular muito XP
        while (character.experience >= requiredXP) {
        character.experience -= requiredXP; // Subtrai o XP necessário
        character.level += 1; // Incrementa o nível
        }

        return character; // Retorna o personagem atualizado
    }
}  