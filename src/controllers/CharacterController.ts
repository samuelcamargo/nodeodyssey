import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Character } from "../entities/Character";

const userRepository = AppDataSource.getRepository(Character);

export const getCharacters = async (req: Request, res: Response): Promise<void> => {
  const character = await userRepository.find({
    select: ["id", "name", "level", "role", "id_user"],
  });
  res.json(character);
};

export const getCharactersById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const character = await userRepository.findOne({
    where: { id: parseInt(id) },
    select: ["id", "name", "level", "role", "id_user"],
  });
  if (!character) {
    res.status(404).json({ message: "Character not found" });
    return;
  }
  res.json(character);
};

export const createCharacters = async (req: Request, res: Response): Promise<void> => {
  const { name, level, role, id_user } = req.body;
  const character = userRepository.create({ name, level, role, id_user });
  await userRepository.save(character);
  res.status(201).json(character);
};