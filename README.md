
# NodeOdyssey

### Descrição
NodeOdyssey é um RPG básico, desenvolvido com **Node.js**, **TypeScript**, e **TypeORM**, usando **SQLite** como banco de dados. 
O projeto inclui a implementação de entidades, relacionamentos e endpoints RESTful para manipulação de personagens, usuários, itens e poções.
Todos os DIREITOS Reservados a Samuel Camargo.

---

## Funcionalidades Implementadas

### 1. Entidades e Relacionamentos
- **Character**:
  - Atributos como `name`, `level`, `attack`, `defense`, `health`, `agility`, `experience` e `role`.
  - Relacionado a `User` via `@ManyToOne`.
  - Experiência acumulativa com cálculo de nível baseado em experiência total.
- **User**:
  - Atributos como `name`, `email` e `password`.
  - Relacionado a `Character` via `@OneToMany`.
- **BagCharacter**:
  - Inventário onde são armazenados os itens obtidos pelos personagens após batalhas.
- **Potion**:
  - Poções que os personagens podem comprar ou utilizar para recuperar vida.

### 2. Estruturas Adicionadas
- Sistema de drop de itens:
  - Implementado um sistema de probabilidade para obter itens após batalhas.
  - Itens são armazenados diretamente no inventário (`BagCharacter`) do personagem.
- Poções:
  - Balanceamento de valores de recuperação de vida e custo.
  - Sistema para utilização de poções respeitando o limite máximo de vida (`max_health`).

---

### 3. Endpoints Desenvolvidos

#### **Characters**
- `POST /characters`:
  - Cria um novo personagem associado a um usuário.
  - Validação de `role` (`guerreiro`, `mago`, `arqueiro`).
- `GET /characters`:
  - Lista todos os personagens com os dados completos do usuário associado (excluindo o campo `password`).
- `GET /characters/:id`:
  - Busca um personagem específico pelo ID, incluindo os dados do usuário associado.
- `PATCH /characters/:id/:exp`:
  - Atualiza a experiência do personagem e recalcula o nível com base na experiência acumulada.

#### **Users**
- `POST /users`:
  - Cria um novo usuário.
- `GET /users`:
  - Lista todos os usuários com os dados completos (excluindo o campo `password`).
- `GET /users/:id`:
  - Busca um usuário específico pelo ID (excluindo o campo `password`).

#### **Battles**
- `PATCH /battle/:id_characters/:id_monster`:
  - Realiza uma batalha.
  - Implementado sistema de drop de itens.

#### **Potions**
- `POST /potions/use`:
  - Usa uma poção para recuperar a vida do personagem, respeitando o limite máximo de vida.
- `GET /potions`:
  - Lista todas as poções disponíveis para compra.

---

## Tecnologias Utilizadas
- **Node.js**: Back-end.
- **TypeScript**: Tipagem estática e boas práticas.
- **TypeORM**: Mapeamento objeto-relacional e gerenciamento de banco de dados.
- **SQLite**: Banco de dados leve e fácil de configurar.
- **Express**: Gerenciamento de rotas e middlewares.
- **Postman**: Testes dos endpoints REST.

---

## Próximos Passos
1. Implementar autenticação de usuários com **JWT**.
2. Adicionar mais funcionalidades aos personagens, como habilidades ou itens raros.
3. Melhorar o tratamento de erros e adicionar testes unitários.
4. Criar um front-end básico para interação com a API.

---

# Como Rodar o Projeto NodeOdyssey

Siga os passos abaixo para configurar e executar o projeto em sua máquina local.

---

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:
- [Node.js](https://nodejs.org) (versão LTS recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [SQLite](https://sqlite.org/) (opcional para inspeção do banco de dados)

---

## Passos para Rodar o Projeto

### 1. Clone o Repositório

Faça o clone do repositório para sua máquina local:
```bash
git clone <URL_DO_REPOSITORIO>
cd NodeOdyssey
```

### 2. Instale as Dependências

Execute o comando para instalar todas as dependências necessárias:
```bash
npm install
```

### 3. Configure as Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com base no arquivo de exemplo `.env-example`. Configure as variáveis conforme necessário. Exemplo básico de `.env`:
```env
DATABASE_PATH=./db/database.sqlite
PORT=3000
```

### 4. Rode as Migrações

Execute as migrações para criar as tabelas no banco de dados SQLite:
```bash
npm run migration:run
```

### 5. Inicie o Servidor

Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000`.

---

## Testando a API

Você pode testar os endpoints utilizando ferramentas como:
- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)
- Ou diretamente no navegador (para métodos `GET`).

Exemplo de endpoints disponíveis:
- **GET /characters**: Lista todos os personagens.
- **POST /characters**: Cria um novo personagem.
- **PATCH /characters/:id/:exp**: Atualiza a experiência de um personagem.
- **POST /potions/use**: Usa uma poção.
- **GET /potions**: Lista as poções disponíveis.

---

## Limpeza do Banco de Dados

Se precisar resetar o banco de dados, exclua o arquivo `database.sqlite` em `db/` e execute novamente as migrações:
```bash
rm ./db/database.sqlite
npm run migration:run
```

---

## Scripts Úteis

- `npm run dev`: Inicia o servidor em modo de desenvolvimento.
- `npm run build`: Compila o TypeScript para JavaScript.
- `npm run migration:generate -- src/migrations/<nome_da_migration>`: Gera uma nova migração.
- `npm run migration:run`: Aplica as migrações no banco de dados.
- `npm run migration:revert`: Reverte a última migração aplicada.

---

Se tiver dúvidas ou encontrar problemas, abra uma issue ou entre em contato!

## Produzido por
Samuel Camargo - 2024