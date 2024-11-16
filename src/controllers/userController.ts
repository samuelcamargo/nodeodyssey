import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

const userRepository = AppDataSource.getRepository(User);

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  const users = await userRepository.find({
    select: ["id", "name", "login"], // Exclui a senha
  });
  res.json(users);
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const user = await userRepository.findOne({
    where: { id: parseInt(id) },
    select: ["id", "name", "login"], // Exclui a senha
  });
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }
  res.json(user);
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { name, login, senha } = req.body;
  const user = userRepository.create({ name, login, senha });
  await userRepository.save(user);
  res.status(201).json(user);
};