import { IMonster } from "../interfaces/Monster";
export class MonsterRepository {
    private monsters: IMonster[] = [
      { id: 1, name: "Slime", level: 1, attack: 5, defense: 2, health: 20, agility: 1, experienceGiven: 10, goldGiven: 10 },
      { id: 2, name: "Goblin", level: 2, attack: 10, defense: 5, health: 30, agility: 3, experienceGiven: 20, goldGiven: 20 },
      { id: 3, name: "Orc", level: 5, attack: 20, defense: 10, health: 50, agility: 2, experienceGiven: 50, goldGiven: 30 },
      { id: 4, name: "Dragão", level: 99, attack: 200, defense: 100, health: 500, agility: 20, experienceGiven: 5000, goldGiven: 1000 },
      { id: 5, name: "Quimera", level: 39, attack: 84, defense: 63, health: 196, agility: 9, experienceGiven: 1954, goldGiven: 412 },
      { id: 6, name: "Succubus Rainha", level: 69, attack: 141, defense: 108, health: 350, agility: 20, experienceGiven: 3450, goldGiven: 699 },
      { id: 7, name: "Armadilha Viva", level: 18, attack: 44, defense: 34, health: 104, agility: 9, experienceGiven: 900, goldGiven: 193 },
      { id: 8, name: "Ciclone", level: 88, attack: 185, defense: 134, health: 457, agility: 27, experienceGiven: 4411, goldGiven: 899 },
      { id: 9, name: "Esqueleto", level: 36, attack: 73, defense: 59, health: 187, agility: 13, experienceGiven: 1818, goldGiven: 403 },
      { id: 10, name: "Goblin Rei", level: 46, attack: 92, defense: 76, health: 231, agility: 13, experienceGiven: 2304, goldGiven: 508 },
      { id: 11, name: "Golem de Pedra", level: 73, attack: 150, defense: 113, health: 382, agility: 21, experienceGiven: 3661, goldGiven: 751 },
      { id: 12, name: "Lobo Selvagem", level: 20, attack: 40, defense: 36, health: 109, agility: 8, experienceGiven: 1018, goldGiven: 218 },
      { id: 13, name: "Ciclone", level: 14, attack: 36, defense: 24, health: 78, agility: 12, experienceGiven: 709, goldGiven: 141 },
      { id: 14, name: "Wyvern", level: 38, attack: 81, defense: 62, health: 208, agility: 11, experienceGiven: 1909, goldGiven: 419 },
      { id: 15, name: "Golem", level: 33, attack: 73, defense: 50, health: 176, agility: 12, experienceGiven: 1656, goldGiven: 342 },
      { id: 16, name: "Fantasma", level: 92, attack: 189, defense: 139, health: 467, agility: 25, experienceGiven: 4615, goldGiven: 966 },
      { id: 17, name: "Elemental de Água", level: 46, attack: 94, defense: 69, health: 230, agility: 11, experienceGiven: 2307, goldGiven: 505 },
      { id: 18, name: "Esqueleto", level: 88, attack: 184, defense: 136, health: 453, agility: 26, experienceGiven: 4417, goldGiven: 897 },
      { id: 19, name: "Beholder", level: 41, attack: 85, defense: 67, health: 218, agility: 10, experienceGiven: 2060, goldGiven: 433 },
      { id: 20, name: "Hidra", level: 38, attack: 81, defense: 58, health: 191, agility: 8, experienceGiven: 1915, goldGiven: 424 },
      { id: 21, name: "Basilisco", level: 67, attack: 139, defense: 105, health: 347, agility: 21, experienceGiven: 3351, goldGiven: 673 },
      { id: 22, name: "Beholder", level: 22, attack: 50, defense: 40, health: 124, agility: 11, experienceGiven: 1100, goldGiven: 246 },
      { id: 23, name: "Fantasma", level: 39, attack: 78, defense: 62, health: 195, agility: 12, experienceGiven: 1964, goldGiven: 416 },
      { id: 24, name: "Elemental de Água", level: 23, attack: 54, defense: 40, health: 132, agility: 10, experienceGiven: 1167, goldGiven: 238 },
      { id: 25, name: "Succubus Rainha", level: 23, attack: 54, defense: 42, health: 130, agility: 12, experienceGiven: 1169, goldGiven: 279 },
      { id: 26, name: "Lobo Selvagem", level: 96, attack: 196, defense: 148, health: 480, agility: 22, experienceGiven: 4810, goldGiven: 981 },
      { id: 27, name: "Cervo Maldito", level: 83, attack: 172, defense: 125, health: 434, agility: 23, experienceGiven: 4151, goldGiven: 835 },
      { id: 28, name: "Demônio", level: 77, attack: 155, defense: 119, health: 392, agility: 25, experienceGiven: 3864, goldGiven: 782 },
      { id: 29, name: "Quimera", level: 58, attack: 125, defense: 94, health: 305, agility: 17, experienceGiven: 2905, goldGiven: 624 },
      { id: 30, name: "Succubus Rainha", level: 35, attack: 71, defense: 54, health: 194, agility: 11, experienceGiven: 1761, goldGiven: 374 },
      { id: 31, name: "Espectro", level: 61, attack: 131, defense: 97, health: 314, agility: 17, experienceGiven: 3050, goldGiven: 637 },
      { id: 32, name: "Zumbi", level: 77, attack: 155, defense: 118, health: 397, agility: 23, experienceGiven: 3858, goldGiven: 800 },
      { id: 33, name: "Elemental de Água", level: 13, attack: 29, defense: 22, health: 72, agility: 10, experienceGiven: 657, goldGiven: 133 },
      { id: 34, name: "Feiticeiro Maligno", level: 34, attack: 71, defense: 51, health: 184, agility: 14, experienceGiven: 1708, goldGiven: 365 },
      { id: 35, name: "Harpia", level: 80, attack: 160, defense: 123, health: 407, agility: 25, experienceGiven: 4009, goldGiven: 843 },
      { id: 36, name: "Goblin Rei", level: 10, attack: 22, defense: 16, health: 63, agility: 9, experienceGiven: 514, goldGiven: 135 },
      { id: 37, name: "Feiticeiro Maligno", level: 63, attack: 132, defense: 100, health: 316, agility: 17, experienceGiven: 3150, goldGiven: 663 },
      { id: 38, name: "Harpia", level: 12, attack: 26, defense: 25, health: 61, agility: 5, experienceGiven: 610, goldGiven: 149 },
      { id: 39, name: "Demônio", level: 82, attack: 164, defense: 126, health: 414, agility: 25, experienceGiven: 4105, goldGiven: 848 },
      { id: 40, name: "Demônio", level: 96, attack: 194, defense: 149, health: 487, agility: 22, experienceGiven: 4817, goldGiven: 1006 },
      { id: 41, name: "Aranha Venenosa", level: 87, attack: 179, defense: 137, health: 439, agility: 19, experienceGiven: 4354, goldGiven: 917 },
      { id: 42, name: "Wyvern", level: 88, attack: 179, defense: 136, health: 451, agility: 26, experienceGiven: 4409, goldGiven: 894 },
      { id: 43, name: "Aranha Venenosa", level: 55, attack: 116, defense: 84, health: 294, agility: 19, experienceGiven: 2767, goldGiven: 566 },
      { id: 44, name: "Goblin Rei", level: 96, attack: 200, defense: 149, health: 483, agility: 26, experienceGiven: 4816, goldGiven: 965 },
      { id: 45, name: "Vampiro", level: 93, attack: 186, defense: 147, health: 480, agility: 26, experienceGiven: 4655, goldGiven: 933 },
      { id: 46, name: "Succubus Rainha", level: 90, attack: 185, defense: 140, health: 458, agility: 20, experienceGiven: 4507, goldGiven: 915 },
      { id: 47, name: "Elemental de Fogo", level: 33, attack: 71, defense: 55, health: 178, agility: 14, experienceGiven: 1665, goldGiven: 356 },
      { id: 48, name: "Vampiro", level: 82, attack: 165, defense: 127, health: 420, agility: 19, experienceGiven: 4104, goldGiven: 823 },
      { id: 49, name: "Goblin Rei", level: 22, attack: 44, defense: 38, health: 112, agility: 7, experienceGiven: 1112, goldGiven: 245 },
      { id: 50, name: "Serpente Marinha", level: 85, attack: 178, defense: 135, health: 425, agility: 23, experienceGiven: 4258, goldGiven: 892 },
      { id: 51, name: "Demônio", level: 38, attack: 83, defense: 57, health: 206, agility: 17, experienceGiven: 1917, goldGiven: 393 },
      { id: 52, name: "Esqueleto", level: 83, attack: 172, defense: 132, health: 418, agility: 19, experienceGiven: 4162, goldGiven: 851 },
      { id: 53, name: "Espectro", level: 41, attack: 83, defense: 68, health: 221, agility: 15, experienceGiven: 2063, goldGiven: 437 },
      { id: 54, name: "Succubus Rainha", level: 19, attack: 46, defense: 31, health: 108, agility: 9, experienceGiven: 951, goldGiven: 229 },
      { id: 55, name: "Lobo Selvagem", level: 87, attack: 180, defense: 137, health: 438, agility: 26, experienceGiven: 4359, goldGiven: 870 },
      { id: 56, name: "Golem de Pedra", level: 77, attack: 155, defense: 121, health: 396, agility: 17, experienceGiven: 3855, goldGiven: 783 },
      { id: 57, name: "Vampiro", level: 60, attack: 124, defense: 95, health: 312, agility: 20, experienceGiven: 3007, goldGiven: 634 },
      { id: 58, name: "Espírito da Floresta", level: 21, attack: 51, defense: 39, health: 110, agility: 6, experienceGiven: 1052, goldGiven: 232 },
      { id: 59, name: "Serpente Marinha", level: 20, attack: 45, defense: 37, health: 104, agility: 6, experienceGiven: 1007, goldGiven: 212 },
      { id: 60, name: "Lobo Selvagem", level: 3, attack: 7, defense: 11, health: 31, agility: 6, experienceGiven: 159, goldGiven: 41 },
      { id: 61, name: "Lobo Selvagem", level: 86, attack: 176, defense: 131, health: 449, agility: 22, experienceGiven: 4301, goldGiven: 904 },
      { id: 62, name: "Succubus Rainha", level: 40, attack: 85, defense: 64, health: 219, agility: 12, experienceGiven: 2013, goldGiven: 407 },
      { id: 63, name: "Demônio", level: 12, attack: 28, defense: 25, health: 79, agility: 4, experienceGiven: 601, goldGiven: 121 },
      { id: 64, name: "Goblin Rei", level: 58, attack: 121, defense: 90, health: 308, agility: 19, experienceGiven: 2901, goldGiven: 584 },
      { id: 65, name: "Succubus Rainha", level: 49, attack: 101, defense: 73, health: 252, agility: 17, experienceGiven: 2464, goldGiven: 495 },
      { id: 66, name: "Lobo Selvagem", level: 29, attack: 58, defense: 43, health: 147, agility: 7, experienceGiven: 1467, goldGiven: 308 },
      { id: 67, name: "Wyvern", level: 60, attack: 129, defense: 97, health: 311, agility: 18, experienceGiven: 3019, goldGiven: 624 },
      { id: 68, name: "Elemental de Fogo", level: 44, attack: 95, defense: 69, health: 228, agility: 15, experienceGiven: 2211, goldGiven: 473 },
      { id: 69, name: "Succubus Rainha", level: 80, attack: 168, defense: 127, health: 407, agility: 21, experienceGiven: 4017, goldGiven: 840 },
      { id: 70, name: "Zumbi", level: 88, attack: 181, defense: 136, health: 443, agility: 20, experienceGiven: 4406, goldGiven: 908 },
      { id: 71, name: "Esqueleto", level: 66, attack: 136, defense: 99, health: 331, agility: 22, experienceGiven: 3315, goldGiven: 706 },
      { id: 72, name: "Lobo Selvagem", level: 91, attack: 191, defense: 143, health: 472, agility: 20, experienceGiven: 4561, goldGiven: 928 },
      { id: 73, name: "Wyvern", level: 80, attack: 165, defense: 127, health: 400, agility: 23, experienceGiven: 4016, goldGiven: 819 },
      { id: 74, name: "Hidra", level: 16, attack: 33, defense: 25, health: 93, agility: 12, experienceGiven: 805, goldGiven: 199 },
      { id: 75, name: "Lobo Selvagem", level: 55, attack: 112, defense: 88, health: 283, agility: 17, experienceGiven: 2765, goldGiven: 560 },
      { id: 76, name: "Serpente Marinha", level: 57, attack: 122, defense: 85, health: 292, agility: 16, experienceGiven: 2864, goldGiven: 579 },
      { id: 77, name: "Aranha Venenosa", level: 48, attack: 101, defense: 75, health: 242, agility: 11, experienceGiven: 2410, goldGiven: 510 },
      { id: 78, name: "Hidra", level: 74, attack: 151, defense: 118, health: 387, agility: 23, experienceGiven: 3702, goldGiven: 764 },
      { id: 79, name: "Golem", level: 78, attack: 162, defense: 120, health: 390, agility: 24, experienceGiven: 3906, goldGiven: 788 },
      { id: 80, name: "Troll", level: 1, attack: 2, defense: 5, health: 15, agility: 8, experienceGiven: 50, goldGiven: 24 },
      { id: 81, name: "Serpente Marinha", level: 66, attack: 139, defense: 101, health: 343, agility: 19, experienceGiven: 3317, goldGiven: 669 },
      { id: 82, name: "Harpia", level: 47, attack: 98, defense: 77, health: 237, agility: 11, experienceGiven: 2364, goldGiven: 481 },
      { id: 83, name: "Demônio", level: 93, attack: 191, defense: 143, health: 483, agility: 28, experienceGiven: 4657, goldGiven: 955 },
      { id: 84, name: "Succubus Rainha", level: 1, attack: 9, defense: 7, health: 6, agility: 4, experienceGiven: 60, goldGiven: 48 },
      { id: 85, name: "Fantasma", level: 10, attack: 21, defense: 16, health: 53, agility: 5, experienceGiven: 510, goldGiven: 130 },
      { id: 86, name: "Esqueleto", level: 89, attack: 185, defense: 140, health: 460, agility: 18, experienceGiven: 4452, goldGiven: 932 },
      { id: 87, name: "Cervo Maldito", level: 13, attack: 31, defense: 24, health: 77, agility: 4, experienceGiven: 657, goldGiven: 177 },
      { id: 88, name: "Dragão Infernal", level: 61, attack: 126, defense: 92, health: 315, agility: 17, experienceGiven: 3059, goldGiven: 651 },
      { id: 89, name: "Armadilha Viva", level: 99, attack: 205, defense: 155, health: 501, agility: 20, experienceGiven: 4950, goldGiven: 102},
      { id: 90, name: "Harpia", level: 100, attack: 200, defense: 152, health: 511, agility: 26, experienceGiven: 5008, goldGiven: 1047 },
      { id: 91, name: "Cervo Maldito", level: 1, attack: 10, defense: 6, health: 22, agility: 3, experienceGiven: 69, goldGiven: 19 },
      { id: 92, name: "Cavaleiro Sombrio", level: 44, attack: 91, defense: 66, health: 238, agility: 12, experienceGiven: 2212, goldGiven: 456 },
      { id: 93, name: "Zumbi", level: 17, attack: 37, defense: 29, health: 94, agility: 9, experienceGiven: 859, goldGiven: 192 },
      { id: 94, name: "Goblin Rei", level: 60, attack: 125, defense: 90, health: 302, agility: 18, experienceGiven: 3013, goldGiven: 630 },
      { id: 95, name: "Vampiro", level: 25, attack: 58, defense: 39, health: 144, agility: 7, experienceGiven: 1259, goldGiven: 278 },
      { id: 96, name: "Elemental de Fogo", level: 2, attack: 13, defense: 4, health: 15, agility: 5, experienceGiven: 118, goldGiven: 59 },
      { id: 97, name: "Cavaleiro Sombrio", level: 56, attack: 120, defense: 87, health: 283, agility: 17, experienceGiven: 2818, goldGiven: 583 },
      { id: 98, name: "Lobo Selvagem", level: 46, attack: 96, defense: 73, health: 234, agility: 18, experienceGiven: 2315, goldGiven: 473 },
      { id: 99, name: "Serpente Marinha", level: 89, attack: 185, defense: 141, health: 449, agility: 23, experienceGiven: 4462, goldGiven: 910 },
      { id: 100, name: "Hidra", level: 100, attack: 204, defense: 152, health: 512, agility: 24, experienceGiven: 5010, goldGiven: 1000 },
      { id: 101, name: "Espectro", level: 50, attack: 104, defense: 81, health: 267, agility: 14, experienceGiven: 2514, goldGiven: 510 },
      { id: 102, name: "Dragão Infernal", level: 73, attack: 150, defense: 111, health: 377, agility: 16, experienceGiven: 3666, goldGiven: 776 },
      { id: 103, name: "Beholder", level: 54, attack: 115, defense: 83, health: 288, agility: 12, experienceGiven: 2709, goldGiven: 546 },
      { id: 104, name: "Harpia", level: 59, attack: 122, defense: 93, health: 297, agility: 16, experienceGiven: 2953, goldGiven: 638 },
      { id: 105, name: "Dragão Infernal", level: 58, attack: 119, defense: 87, health: 303, agility: 18, experienceGiven: 2902, goldGiven: 605 },
      { id: 106, name: "Zumbi", level: 33, attack: 68, defense: 54, health: 168, agility: 13, experienceGiven: 1659, goldGiven: 335 },
      { id: 107, name: "Cavaleiro Sombrio", level: 1, attack: 10, defense: 5, health: 21, agility: 1, experienceGiven: 59, goldGiven: 29 },
      { id: 108, name: "Elemental de Água", level: 9, attack: 19, defense: 15, health: 51, agility: 7, experienceGiven: 463, goldGiven: 105 },
      { id: 109, name: "Serpente Marinha", level: 71, attack: 145, defense: 110, health: 362, agility: 19, experienceGiven: 3569, goldGiven: 743 },
      { id: 110, name: "Fada Negra", level: 54, attack: 108, defense: 87, health: 285, agility: 15, experienceGiven: 2715, goldGiven: 576 },
      { id: 111, name: "Beholder", level: 54, attack: 116, defense: 81, health: 282, agility: 19, experienceGiven: 2716, goldGiven: 540 },
      { id: 112, name: "Elemental de Fogo", level: 47, attack: 103, defense: 74, health: 248, agility: 11, experienceGiven: 2357, goldGiven: 477 },
      { id: 113, name: "Fada Negra", level: 37, attack: 82, defense: 61, health: 203, agility: 10, experienceGiven: 1865, goldGiven: 399 },
      { id: 114, name: "Basilisco", level: 6, attack: 12, defense: 9, health: 37, agility: 2, experienceGiven: 312, goldGiven: 73 },
      { id: 115, name: "Goblin Rei", level: 59, attack: 123, defense: 95, health: 309, agility: 21, experienceGiven: 2953, goldGiven: 615 },
      { id: 116, name: "Golem", level: 90, attack: 186, defense: 141, health: 459, agility: 19, experienceGiven: 4509, goldGiven: 933 },
      { id: 117, name: "Quimera", level: 58, attack: 116, defense: 89, health: 294, agility: 19, experienceGiven: 2910, goldGiven: 609 },
      { id: 118, name: "Ciclone", level: 53, attack: 112, defense: 79, health: 279, agility: 16, experienceGiven: 2652, goldGiven: 566 },
      { id: 119, name: "Aranha Venenosa", level: 67, attack: 142, defense: 101, health: 345, agility: 18, experienceGiven: 3357, goldGiven: 689 },
      { id: 120, name: "Feiticeiro Maligno", level: 86, attack: 174, defense: 134, health: 447, agility: 24, experienceGiven: 4301, goldGiven: 907 },
      { id: 121, name: "Golem", level: 50, attack: 106, defense: 78, health: 262, agility: 11, experienceGiven: 2511, goldGiven: 527 },
      { id: 122, name: "Esqueleto", level: 29, attack: 63, defense: 47, health: 145, agility: 8, experienceGiven: 1463, goldGiven: 316 },
      { id: 123, name: "Serpente Marinha", level: 38, attack: 78, defense: 64, health: 205, agility: 14, experienceGiven: 1909, goldGiven: 397 },
      { id: 124, name: "Elemental de Fogo", level: 42, attack: 85, defense: 65, health: 226, agility: 15, experienceGiven: 2116, goldGiven: 427 },
      { id: 125, name: "Quimera", level: 83, attack: 169, defense: 127, health: 424, agility: 20, experienceGiven: 4153, goldGiven: 871 },
      { id: 126, name: "Aranha Venenosa", level: 50, attack: 104, defense: 77, health: 252, agility: 18, experienceGiven: 2507, goldGiven: 524 },
      { id: 127, name: "Armadilha Viva", level: 45, attack: 97, defense: 73, health: 227, agility: 17, experienceGiven: 2259, goldGiven: 469 },
      { id: 128, name: "Quimera", level: 17, attack: 37, defense: 32, health: 91, agility: 9, experienceGiven: 865, goldGiven: 469 },
  ];

  findById(id: number): IMonster | undefined {
    return this.monsters.find((monster) => monster.id === id);
  }


  getRandomMonster(characterLevel: number): IMonster | undefined  {

    // Filtra os monstros dentro do intervalo de 10 níveis
    const filteredMonsters = this.monsters.filter(
      (monster) =>
          monster.level >= characterLevel - 10 &&
          monster.level <= characterLevel + 10
  );
  

  // Define a probabilidade para cada monstro baseado no nível relativo
  const monstersWithProbability = filteredMonsters.map((monster) => {
      const levelDifference = Math.abs(characterLevel - monster.level);
      const probability = levelDifference === 0
          ? 0.5 // 50% de chance para o mesmo nível ou inferior
          : Math.max(0.1, 1 - levelDifference * 0.05); // Reduz a chance proporcionalmente
      return { ...monster, probability };
  });
  
  // Calcula o total das probabilidades
  const totalProbability = monstersWithProbability.reduce(
      (sum, monster) => sum + monster.probability,
      0
  );
  
  // Gera um número aleatório entre 0 e o total de probabilidades
  const random = Math.random() * totalProbability;
  
  // Encontra o monstro correspondente à probabilidade
  let cumulativeProbability = 0;
  for (const monster of monstersWithProbability) {
      cumulativeProbability += monster.probability;
      if (random <= cumulativeProbability) {
          //return monster.id;
          return this.monsters.find((m) => m.id === monster.id);
      }
  }
  }

}