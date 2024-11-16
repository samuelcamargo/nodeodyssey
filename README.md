# NodeOdyssey

### Descrição
NodeOdyssey é um RPG basico, desenvolvido com **Node.js**, **TypeScript**, e **TypeORM**, usando **SQLite** como banco de dados. 
O projeto inclui a implementação de entidades, relacionamentos e endpoints RESTful para manipulação de personagens e usuários.

---

## Funcionalidades Implementadas

### 1. Entidades e Relacionamentos
- **Character**:
  - Atributos como `name`, `level`, `attack`, `defense`, `health`, `agility` e `role`.
  - Relacionado a `User` via `@ManyToOne`.
- **User**:
  - Atributos como `name`, `email` e `password`.
  - Relacionado a `Character` via `@OneToMany`.

### 2. Endpoints Desenvolvidos

#### **Characters**
- `POST /characters`:
  - Cria um novo personagem associado a um usuário.
  - Validação de `role` (`guerreiro`, `mago`, `arqueiro`).
- `GET /characters`:
  - Lista todos os personagens com os dados completos do usuário associado (excluindo o campo `password`).
- `GET /characters/:id`:
  - Busca um personagem específico pelo ID, incluindo os dados do usuário associado.

#### **Users**
- `POST /users`:
  - Cria um novo usuario associado a um usuário.
- `GET /users`:
  - Lista todos os usuarios com os dados completos do usuário associado (excluindo o campo `password`).
- `GET /users/:id`:
  - Busca um usuario específico pelo ID (excluindo o campo `password`)

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
2. Adicionar mais funcionalidades aos personagens, como habilidades ou itens.
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