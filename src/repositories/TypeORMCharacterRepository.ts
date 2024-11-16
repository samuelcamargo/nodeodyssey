import { Repository } from "typeorm";
import { Character } from "../entities/Character";
import { CharacterRepository } from "./CharacterRepository";

export class TypeORMCharacterRepository implements CharacterRepository {
  constructor(private ormRepository: Repository<Character>) {}

  async findById(id: number): Promise<Character | null> {
    return this.ormRepository.findOne({ where: { id } });
  }

  async save(character: Character): Promise<Character> {
    return this.ormRepository.save(character);
  }
}