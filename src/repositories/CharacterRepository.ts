import { Character } from "../entities/Character";

export interface CharacterRepository {
  findById(id: number): Promise<Character | null>;
  save(character: Character): Promise<Character>;
}