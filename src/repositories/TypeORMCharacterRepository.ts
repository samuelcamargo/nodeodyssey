import { Repository } from "typeorm";
import { Character } from "../entities/Character";
import { User } from "../entities/User";
export class TypeORMCharacterRepository {
  constructor(private ormRepository: Repository<Character>) {}

  async findById(id: number): Promise<Character | null> {
    return this.ormRepository.findOne({ where: { id }});
  }

  async save(character: Character): Promise<Character> {
    if (!character.id_user) {
        throw new Error("User ID is required to save the character");
    }

    // Encontra o usuário pelo ID
    const user = await this.ormRepository.manager.findOne(User, {
        where: { id: character.id_user },
    });

    if (!user) {
        throw new Error("User not found");
    }

    // Salva o personagem com o relacionamento de usuário
    const savedCharacter = await this.ormRepository.save({
        ...character,
        user, // Relaciona o usuário ao personagem
    });

    return savedCharacter as Character;
}


}