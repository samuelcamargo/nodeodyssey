import { Request, Response } from "express";
import { UsePotionInCharacter } from "../use-cases/usePotionInCharacter";
import { TypeORMCharacterRepository } from "../repositories/TypeORMCharacterRepository";
import { AppDataSource } from "../data-source";
import { Character } from "../entities/Character";
import { PotionRepository } from '../repositories/PotionRepository';


export const usePotion = async (req: Request, res: Response): Promise<void> => {
    const { id_user, id_potion } = req.params; // ID do personagem e valor como parâmetros
  
    try {
      // Validação dos parâmetros
      if (!id_user || isNaN(Number(id_user))) {
        res.status(400).json({ message: "Invalid character ID. It must be a number." });
        return;
      }
  
      if (!id_potion || isNaN(Number(id_potion))) {
        res.status(400).json({ message: "Invalid item Potion. It must be a number." });
        return;
      }
      
      // Repositório e caso de uso
      const ormRepository = AppDataSource.getRepository(Character);
      const characterRepository = new TypeORMCharacterRepository(ormRepository);
      const potionRepository = new PotionRepository;
      const usePotionInCharacter = new UsePotionInCharacter(characterRepository,potionRepository);
  
      const updatedCharacter = await usePotionInCharacter.execute(Number(id_user), Number(id_potion));
  
      res.json(updatedCharacter);
    } catch (error: any) {
      console.error(error);
      res.status(400).json({ message: error.message });
    }
  };