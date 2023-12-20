# Campeonato de Futsal - API e Interface

Este projeto consiste em uma API para gerenciamento de um campeonato de futsal, juntamente com uma interface básica para interagir com essa API.

## Instalação e Configuração

### 1. Instalar Dependências

Certifique-se de ter o Node.js instalado.

```bash
npm install
```

### 2. Configuração do Banco de Dados
Configure o arquivo config.json na pasta config com as credenciais do seu banco de dados MySQL:

```
{
  "development": {
    "username": "seu_usuario",
    "password": "sua_senha",
    "database": "campeonatofutsal",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "seu_usuario_teste",
    "password": "sua_senha_teste",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "seu_usuario_producao",
    "password": "sua_senha_producao",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

### 3. Executar as Migrações
Execute o seguinte comando para criar as tabelas no banco de dados:
```
npx sequelize-cli db:migrate
```

### Executando o Servidor:
```
npm start
```

O servidor estará rodando em http://localhost:3000.

# Exemplos de Requisições API

Aqui estão alguns exemplos de requisições HTTP para as rotas disponíveis na sua API, utilizando o Postman.

## Autenticação

### Rota: Autenticação (geração de token JWT)
- **Método:** POST
- **URL:** `http://localhost:3000/autenticacao`
- **Corpo (Body):** JSON
  ```json
  {
      "username": "admin",
      "password": "admin"
  }

## Jogadores

### Rota: Listar Jogadores
- **Método:** GET
- **URL:** `http://localhost:3000/jogadores`

### Rota: Cadastrar Jogador
- **Método:** POST
- **URL:** `http://localhost:3000/jogadores`
- **Corpo (Body):** JSON
  ```json
  {
    "nome": "Novo Jogador",
    "numeroCamiseta": 10
  }

## Rota: Editar Jogador
- **Método:** POST
- **URL:** `http://localhost:3000/jogadores/:id` (Substitua :id pelo ID do jogador)
- **Corpo (Body):** JSON
  ```json
  {
    "nome": "Novo Nome Jogador",
    "numeroCamiseta": 7
  }

## Classificação

### Rota: Listar Classificação
- **Método:** POST
- **URL:** `http://localhost:3000/classificacao`

## Partidas

## Rota: Listar Partidas
- **Método:** POST
- **URL:** `http://localhost:3000/partidas`

## Rota: Cadastrar Partida
- **Método:** POST
- **URL:** `http://localhost:3000/partidas` 
- **Corpo (Body):** JSON
  ```json
  {
    "data": "2023-12-19",
    "horarioInicio": "15:00",
    "horarioTermino": "17:00",
    "idTime1": 1,
    "idTime2": 2,
    "placar": "2-1"
  }

## Times

## Rota: Listar Times
- **Método:** POST
- **URL:** `http://localhost:3000/times`

## Rota: Cadastrar Time
- **Método:** POST
- **URL:** `http://localhost:3000/times`
- **Corpo (Body):** JSON
  ```json
  {
    "nome": "Novo Time FC"
  }

## Rota: Adicionar jogador a um time
- **Método:** PUT
- **URL:** `http://localhost:3000/times/adicionar-jogador`
- **Corpo (Body):** JSON
  ```json
  {
    "idTime": 1,
    "idJogador": 3
  }

## Rota: Excluir Jogador de um Time
- **Método:** PUT
- **URL:** `http://localhost:3000/times/excluir-jogador`
- **Corpo (Body):** JSON
  ```json
  {
    "idTime": 1,
    "idJogador": 3
  }