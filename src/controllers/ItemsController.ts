import { Request, Response } from "express";
import { TypeORMCharacterRepository } from "../repositories/TypeORMCharacterRepository";
import { AppDataSource } from "../data-source";
import { Character } from "../entities/Character";
import { EquipItemInCharacter } from "../use-cases/EquipeItemInCharacter";

export const equipeItem = async (req: Request, res: Response): Promise<void> => {
    const { id_user, id_item, position } = req.params; // Adicionando position nos parâmetros

    try {
        // Validação dos parâmetros
        if (!id_user || isNaN(Number(id_user))) {
            res.status(400).json({ message: "Invalid character ID. It must be a number." });
            return;
        }

        if (!id_item || isNaN(Number(id_item))) {
            res.status(400).json({ message: "Invalid item ID. It must be a number." });
            return;
        }

        if (!position || typeof position !== 'string') {
            res.status(400).json({ message: "Invalid position field. It must be a string." });
            return;
        }

        // Repositório e caso de uso
        const ormRepository = AppDataSource.getRepository(Character);
        const characterRepository = new TypeORMCharacterRepository(ormRepository);

        const equipItemInCharacter = new EquipItemInCharacter(characterRepository);

        const updatedCharacter = await equipItemInCharacter.execute(
            Number(id_user),
            Number(id_item),
            position
        );

        res.json(updatedCharacter);
    } catch (error: any) {
        //console.error(error);
        res.status(400).json({ message: error.message });
    }
};
