import { Request, Response } from 'express';
import { AppDataSource } from "../data-source";
import { Character } from '../entities/Character';
import { TypeORMCharacterRepository } from '../repositories/TypeORMCharacterRepository';
import { MonsterRepository } from '../repositories/MonsterRepository';
import { BattleSystem } from '../services/BattleSystem';

const characterRepository = new TypeORMCharacterRepository(AppDataSource.getRepository(Character));
const monsterRepository = new MonsterRepository();

export const battle = async (req: Request, res: Response): Promise<any> => {
  try {
    const { characterId, monsterId } = req.params;

    // Validação dos parâmetros
    if (!characterId || !monsterId) {
      return res.status(400).json({ error: 'Character ID and Monster ID are required' });
    }

    // Buscar o personagem pelo ID
    const character = await characterRepository.findById(Number(characterId));
    if (!character) {
      return res.status(404).json({ error: 'Character not found' });
    }

    // Buscar o monstro pelo ID
    const monster = monsterRepository.findById(Number(monsterId));
    if (!monster) {
      return res.status(404).json({ error: 'Monster not found' });
    }

    // Resolver a batalha
    const result = BattleSystem.resolveBattle(character, monster);

    // Atualizar o personagem caso ele vença
    if (result.winner === 'character') {
      await characterRepository.save(result.character);
    }

    // Retornar o resultado da batalha
    return res.json(result);

  } catch (error: any) {
    console.error('Error during battle:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};