import { Repository } from "typeorm";
import { BagCharacter } from "../entities/BagCharacter";
import { AppDataSource } from "../data-source"; // Certifique-se de importar seu DataSource

export class BagCharacterRepository {
    private repository: Repository<BagCharacter>;

    constructor() {
        this.repository = AppDataSource.getRepository(BagCharacter);
    }

    async save(item: BagCharacter): Promise<BagCharacter> {
        return await this.repository.save(item);
    }
}