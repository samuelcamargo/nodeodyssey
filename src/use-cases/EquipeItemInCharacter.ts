import { Character } from "../entities/Character";
import { CharacterRepository } from "../repositories/CharacterRepository";

export class EquipItemInCharacter {
constructor(
    private characterRepository: CharacterRepository
) {}

async execute(
    characterId: number,
    itemId: number,
    position: string
): Promise<Character> {
    // Busca o personagem
    const character = await this.characterRepository.findById(characterId);
    if (!character) {
    throw new Error("Character not found");
    }

    // Atualiza o campo correspondente
    if (Object.keys(character).includes(position)) {
    (character as any)[position] = itemId;
    } else {
    throw new Error("Invalid position field");
    }

    // Salva as alterações no banco
    await this.characterRepository.save(character);

    return character;
}
}  