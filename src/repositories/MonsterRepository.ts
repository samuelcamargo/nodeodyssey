import { IMonster } from "../interfaces/Monster";

export class MonsterRepository {
  private monsters: IMonster[] = [
    { id: 1, name: "Slime", level: 1, attack: 5, defense: 2, health: 20, agility: 1, experienceGiven: 10, goldGiven: 10 },
    { id: 2, name: "Goblin", level: 2, attack: 10, defense: 5, health: 30, agility: 3, experienceGiven: 20, goldGiven: 20  },
    { id: 3, name: "Orc", level: 5, attack: 20, defense: 10, health: 50, agility: 2, experienceGiven: 50, goldGiven: 30  },
    { id: 99, name: "Dragão", level: 99, attack: 200, defense: 100, health: 500, agility: 20, experienceGiven: 5000, goldGiven: 1000  },
  ];

  findById(id: number): IMonster | undefined {
    return this.monsters.find((monster) => monster.id === id);
  }
}