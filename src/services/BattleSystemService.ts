import { BagCharacter } from '../entities/BagCharacter';
import { Character } from '../entities/Character';
import { IMonster } from "../interfaces/Monster";
import { dropSystemService } from "./dropSystemService";
import { ExperienceService } from "./ExperienceService";
import { GoldService } from "./goldService";
import { BagCharacterRepository } from '../repositories/BagCharacterRepository';

export class BattleSystem {


    static async calculateAttributes(character: Character): Promise<Character> {

        const bagRepo = new BagCharacterRepository;
        const bagItems = await bagRepo.getAll(character.id);

        // Validar se os itens da bag estão carregados
        if (!bagItems || !Array.isArray(bagItems)) {
            throw new Error("Bag items are not loaded or invalid.");
        }
    
        // Lista de IDs de itens equipados
        const equippedItemsIds = [
            character.weapon_id,
            character.armor_id,
            character.helmet_id,
            character.boots_id,
            character.pants_id,
            character.ring_1_id,
            character.ring_2_id,
            character.amulet_id,
        ].filter(id => id); // Filtrar apenas IDs válidos
    
        // Filtrar itens equipados presentes na bag do personagem
        const equippedItems = bagItems.filter(item =>
            equippedItemsIds.includes(item.id)
        );
    
        // Inicializar os atributos do personagem
        const updatedCharacter: Character = {
            ...character,
            attack: character.attack || 0,
            defense: character.defense || 0,
            health: character.health || 0,
            agility: character.agility || 0,
        };
    
        // Somar os atributos dos itens equipados
        for (const item of equippedItems) {
            updatedCharacter.attack += item.attack || 0;
            updatedCharacter.defense += item.defense || 0;
            updatedCharacter.max_health += item.max_health || 0;
            updatedCharacter.agility += item.agility || 0;
        }
    
        return updatedCharacter;
    }

    static async resolveBattle(
        character: Character,
        monster: IMonster
    ): Promise<{ winner: string; character: Character; monster: IMonster; drops: any[] }> {

        const characterOriginal = character;

        const characterState = await this.calculateAttributes(character);

        //const characterState = character;

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

        //console.log(characterState);

        // Determinar o vencedor e atribuir experiência se o personagem vencer
        if (characterState.health > 0) {
             // RESET EQUIPES TO SAVE
             characterState.agility = characterOriginal.agility;
             characterState.attack = characterOriginal.attack;
             characterState.health = characterState.health;
             characterState.defense = characterOriginal.defense;
             characterState.max_health = characterOriginal.max_health;

            ExperienceService.addExperience(characterState, monsterState.experienceGiven);
            GoldService.addgold(characterState,monsterState.goldGiven);

            //console.log(characterState);

            const droppedItems = await dropSystemService.drop(characterState,1,monsterState.level);

            return {
                winner: "character",
                character: characterState,
                monster: monsterState,
                drops: droppedItems,
            };
        } else {
            return {
                winner: "monster",
                character: characterState,
                monster: monsterState,
                drops: [],
            };
        }
    }
}
