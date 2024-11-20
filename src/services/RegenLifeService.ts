import { ICharacter } from "../interfaces/Character";
export class RegenLifeService {
    static usePotion(character: ICharacter, life: number, paygold: number): ICharacter {
        // Atualiza a saúde do personagem
        character.health += life;

        // Garante que a saúde não ultrapasse o máximo permitido
        if (character.health > character.max_health) {
            character.health = character.max_health;
        }

        // Atualiza o ouro do personagem
        character.gold -= paygold;

        // Retorna o personagem modificado
        return character;
    }
}