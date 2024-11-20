import { Request, Response } from 'express';
import { AppDataSource } from "../data-source";
import { Character } from '../entities/Character';
import { TypeORMCharacterRepository } from '../repositories/TypeORMCharacterRepository';
import { MonsterRepository } from '../repositories/MonsterRepository';
import { BattleSystem } from '../services/BattleSystemService';

const characterRepository = new TypeORMCharacterRepository(AppDataSource.getRepository(Character));
const monsterRepository = new MonsterRepository();

// batalha por id especifico
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
    const result = await BattleSystem.resolveBattle(character, monster);

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

function getRandomMonster() { // abistrair ---- sair daqui
  // Define os IDs e suas respectivas probabilidades
  const monsters = [
    { id: 1, probability: 0.3 },  // 30% de chance - slime
    { id: 2, probability: 0.2 },  // 20% de chance - goblin
    { id: 3, probability: 0.1 },  // 10% de chance - orc
    { id: 99, probability: 0.05 } // 5% de chance - dragão
  ];

  // Calcula o total da soma das probabilidades
  const totalProbability = monsters.reduce((sum, monster) => sum + monster.probability, 0);

  // Gera um número aleatório entre 0 e o total de probabilidades
  const random = Math.random() * totalProbability;

  // Encontra o monstro correspondente à probabilidade
  let cumulativeProbability = 0;
  for (const monster of monsters) {
    cumulativeProbability += monster.probability;
    if (random <= cumulativeProbability) {
      return monster.id;
    }
  }
}


// batalha randomica
export const battleRandon = async (req: Request, res: Response): Promise<any> => {
  try {
    
    const monsterId = getRandomMonster();

    const { characterId } = req.params;

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
    const result = await BattleSystem.resolveBattle(character, monster);

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
}