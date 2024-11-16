import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Character } from "../entities/Character";
import { Role } from "../enum/RoleEnum"
import { User } from "../entities/User";

const userRepository = AppDataSource.getRepository(Character);

export const getCharacters = async (req: Request, res: Response): Promise<void> => {
  try {
    const characterRepository = AppDataSource.getRepository(Character);
    const characters = await characterRepository.find({
      relations: ["user"], // Carrega o relacionamento com User
    });

    res.json(characters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching characters" });
  }
};


export const getCharactersById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const characterRepository = AppDataSource.getRepository(Character);
    const character = await characterRepository.findOne({
      where: { id: parseInt(id) },
      relations: ["user"], // Carrega o relacionamento com User
    });

    if (!character) {
      res.status(404).json({ message: "Character not found" });
      return;
    }

    res.json(character);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching character" });
  }
};


export const createCharacters = async (req: Request, res: Response): Promise<void> => {
  const { name, attack, defense, health, agility, level, role, id_user } = req.body;

  // Validação do papel (role)
  if (!Object.values(Role).includes(role)) {
    res.status(400).json({ message: "Invalid role value" });
    return;
  }

  try {
    // Buscar o usuário pelo ID
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ id: id_user });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // Criar e salvar o personagem
    const characterRepository = AppDataSource.getRepository(Character);
    const character = characterRepository.create({
      name,
      attack,
      defense,
      health,
      agility,
      level,
      role,
      user,
    });

    await characterRepository.save(character);

    res.status(201).json(character);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating character" });
  }
};