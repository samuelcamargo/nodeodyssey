import { IItems } from "../interfaces/Items";

export class itensRepository {
  static getAll() {
    throw new Error("Method not implemented.");
  }
  private items: IItems[] = [
    /* armas */
    { id: 1, name: "Espada de madera", level: 1, attack: 2, defense: 0, max_health: 0, agility: 1, itemType: "espada"},
    { id: 2, name: "Machado de madera", level: 1, attack: 2, defense: 0, max_health: 0, agility: 1, itemType: "machado"},
    { id: 3, name: "Clava de madera", level: 1, attack: 2, defense: 0, max_health: 0, agility: 1, itemType: "clava"},
    { id: 4, name: "Espadas Duplas de madera", level: 1, attack: 2, defense: 0, max_health: 0, agility: 1, itemType: "clava"},
    { id: 5, name: "Espada Especial 1", level: 32, attack: 90, defense: 7, max_health: 93, agility: 37, itemType: "espada" },
    { id: 6, name: "Espada Especial 2", level: 66, attack: 156, defense: 19, max_health: 166, agility: 88, itemType: "espada" },
    { id: 7, name: "Espada Especial 3", level: 44, attack: 76, defense: 17, max_health: 82, agility: 60, itemType: "espada" },
    { id: 8, name: "Espada Especial 4", level: 71, attack: 179, defense: 33, max_health: 79, agility: 118, itemType: "espada" },
    { id: 9, name: "Espada Especial 5", level: 92, attack: 251, defense: 21, max_health: 199, agility: 165, itemType: "espada" },
    { id: 10, name: "Machado Especial 1", level: 34, attack: 70, defense: 13, max_health: 39, agility: 46, itemType: "machado" },
    { id: 11, name: "Machado Especial 2", level: 33, attack: 77, defense: 5, max_health: 83, agility: 47, itemType: "machado" },
    { id: 12, name: "Machado Especial 3", level: 70, attack: 152, defense: 11, max_health: 71, agility: 87, itemType: "machado" },
    { id: 13, name: "Machado Especial 4", level: 82, attack: 164, defense: 14, max_health: 245, agility: 140, itemType: "machado" },
    { id: 14, name: "Machado Especial 5", level: 88, attack: 174, defense: 30, max_health: 182, agility: 99, itemType: "machado" },
    { id: 15, name: "Clava Especial 1", level: 31, attack: 84, defense: 5, max_health: 32, agility: 36, itemType: "clava" },
    { id: 16, name: "Clava Especial 2", level: 64, attack: 101, defense: 25, max_health: 190, agility: 122, itemType: "clava" },
    { id: 17, name: "Clava Especial 3", level: 98, attack: 269, defense: 13, max_health: 136, agility: 179, itemType: "clava" },
    { id: 18, name: "Clava Especial 4", level: 92, attack: 249, defense: 25, max_health: 108, agility: 122, itemType: "clava" },
    { id: 19, name: "Clava Especial 5", level: 81, attack: 132, defense: 34, max_health: 88, agility: 111, itemType: "clava" },
    { id: 20, name: "Espadas Duplas Especial 1", level: 43, attack: 77, defense: 5, max_health: 121, agility: 53, itemType: "doblesespada" },
    { id: 21, name: "Espadas Duplas Especial 2", level: 49, attack: 120, defense: 7, max_health: 56, agility: 52, itemType: "doblesespada" },
    { id: 22, name: "Espadas Duplas Especial 3", level: 55, attack: 118, defense: 9, max_health: 158, agility: 65, itemType: "doblesespada" },
    { id: 23, name: "Espadas Duplas Especial 4", level: 46, attack: 125, defense: 9, max_health: 81, agility: 60, itemType: "doblesespada" },
    { id: 24, name: "Espadas Duplas Especial 5", level: 91, attack: 226, defense: 13, max_health: 180, agility: 123, itemType: "doblesespada" },
    { id: 25, name: "Cajado Especial 1", level: 32, attack: 90, defense: 7, max_health: 93, agility: 37, itemType: "cajado" },
    { id: 26, name: "Cajado Especial 2", level: 66, attack: 156, defense: 19, max_health: 166, agility: 88, itemType: "cajado" },
    { id: 27, name: "Cajado Especial 3", level: 44, attack: 76, defense: 17, max_health: 82, agility: 60, itemType: "cajado" },
    { id: 28, name: "Cajado Especial 4", level: 71, attack: 179, defense: 33, max_health: 79, agility: 118, itemType: "cajado" },
    { id: 29, name: "Cajado Especial 5", level: 92, attack: 251, defense: 21, max_health: 199, agility: 165, itemType: "cajado" },
    { id: 30, name: "Varinha Especial 1", level: 32, attack: 90, defense: 7, max_health: 93, agility: 37, itemType: "varinha" },
    { id: 31, name: "Varinha Especial 2", level: 66, attack: 156, defense: 19, max_health: 166, agility: 88, itemType: "varinha" },
    { id: 32, name: "Varinha Especial 3", level: 44, attack: 76, defense: 17, max_health: 82, agility: 60, itemType: "varinha" },
    { id: 33, name: "Varinha Especial 4", level: 71, attack: 179, defense: 33, max_health: 79, agility: 118, itemType: "varinha" },
    { id: 34, name: "Varinha Especial 5", level: 92, attack: 251, defense: 21, max_health: 199, agility: 165, itemType: "varinha" },
    { id: 35, name: "Arco Especial 1", level: 32, attack: 90, defense: 7, max_health: 93, agility: 37, itemType: "arco" },
    { id: 36, name: "Arco Especial 2", level: 66, attack: 156, defense: 19, max_health: 166, agility: 88, itemType: "arco" },
    { id: 37, name: "Arco Especial 3", level: 44, attack: 76, defense: 17, max_health: 82, agility: 60, itemType: "arco" },
    { id: 38, name: "Arco Especial 4", level: 71, attack: 179, defense: 33, max_health: 79, agility: 118, itemType: "arco" },
    { id: 39, name: "Arco Especial 5", level: 92, attack: 251, defense: 21, max_health: 199, agility: 165, itemType: "arco" },
    { id: 40, name: "Besta Especial 1", level: 32, attack: 90, defense: 7, max_health: 93, agility: 37, itemType: "besta" },
    { id: 41, name: "Besta Especial 2", level: 66, attack: 156, defense: 19, max_health: 166, agility: 88, itemType: "besta" },
    { id: 42, name: "Besta Especial 3", level: 44, attack: 76, defense: 17, max_health: 82, agility: 60, itemType: "besta" },
    { id: 43, name: "Besta Especial 4", level: 71, attack: 179, defense: 33, max_health: 79, agility: 118, itemType: "besta" },
    { id: 44, name: "Besta Especial 5", level: 92, attack: 251, defense: 21, max_health: 199, agility: 165, itemType: "besta" },
    { id: 45, name: "Adaga Especial 1", level: 32, attack: 90, defense: 7, max_health: 93, agility: 37, itemType: "adaga" },
    { id: 46, name: "Adaga Especial 2", level: 66, attack: 156, defense: 19, max_health: 166, agility: 88, itemType: "adaga" },
    { id: 47, name: "Adaga Especial 3", level: 44, attack: 76, defense: 17, max_health: 82, agility: 60, itemType: "adaga" },
    { id: 48, name: "Adaga Especial 4", level: 71, attack: 179, defense: 33, max_health: 79, agility: 118, itemType: "adaga" },
    { id: 49, name: "Adaga Especial 5", level: 92, attack: 251, defense: 21, max_health: 199, agility: 165, itemType: "adaga" },
    { id: 50, name: "Mosquete Especial 1", level: 32, attack: 90, defense: 7, max_health: 93, agility: 37, itemType: "mosquete" },
    { id: 51, name: "Mosquete Especial 2", level: 66, attack: 156, defense: 19, max_health: 166, agility: 88, itemType: "mosquete" },
    { id: 52, name: "Mosquete Especial 3", level: 44, attack: 76, defense: 17, max_health: 82, agility: 60, itemType: "mosquete" },
    { id: 53, name: "Mosquete Especial 4", level: 71, attack: 179, defense: 33, max_health: 79, agility: 118, itemType: "mosquete" },
    { id: 54, name: "Mosquete Especial 5", level: 92, attack: 251, defense: 21, max_health: 199, agility: 165, itemType: "mosquete" },
    /* Armaduras */

    /* Acessorios */
  ];

  // Implementa o método getAll para retornar todos os itens
  public getAll(): IItems[] {
    return this.items; // Retorna o array de itens
  }
}