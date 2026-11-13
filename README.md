# 📚 API de Gestão da Livraria — Grupo7

> Projeto desenvolvido na Unidade Curricular de **Programação Back-End**
> **Curso Técnico em Desenvolvimento de Sistemas** | Escola SENAI "Santo Paschoal Crepaldi"
> **Turma:** 1-2026-SESI_DEV_OC_1

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Insomnia](https://img.shields.io/badge/Insomnia-4000BF?style=for-the-badge&logo=insomnia&logoColor=white)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=for-the-badge)

</div>

---

## 📌 Sobre o Projeto

O objetivo do projeto é construir a API de gestão de uma livraria aplicando conceitos essenciais de **Programação Orientada a Objetos (POO)** e arquitetura Back-End em JavaScript/Node.js, evoluindo desde modelos em memória até a persistência relacional com **MySQL**.

O projeto foi desenvolvido em blocos incrementais:

- **Atividade 03 — Pessoas da Livraria:** modelagem do cadastro de pessoas que interagem com o sistema (clientes, funcionários e administradores), com herança em múltiplos níveis:
  ```
  Pessoa ➔ Cliente
  Pessoa ➔ Funcionario ➔ Administrador
  ```
- **Atividade 04 — Catálogo e Carrinho:** modelagem do acervo da livraria, diferenciando livros físicos e digitais, além da lógica de carrinho de compras:
  ```
  Livro ➔ LivroFisico
  Livro ➔ LivroDigital
  Carrinho (composição: agrega Livros e Clientes)
  ```
- **Bloco 4 — Persistência Relacional com MySQL:** substituição do armazenamento em memória por banco de dados relacional MySQL via `mysql2/promise`, com criação das tabelas `categorias` e `livros`, suporte a chave estrangeira (`1:N`), arquitetura em camadas (Controllers, Services, Middlewares e Config) e tratamento de erros do banco de dados (ex: `400`, `404`, `409`, `503`).

---

## 👥 Integrantes do Grupo

| Nome | GitHub |
| :--- | :--- |
| **Sophia Basaglia** | [@sophibasaglia](https://github.com/sophibasaglia) |
| **Ana Beatriz** | [@AnaFumes](https://github.com/AnaFumes) |
| **Yohane Moreno** | [@yohanemoreno](https://github.com/yohanemoreno) |
| **Victor Vichi** | [@victorvichi-dev](https://github.com/victorvichi-dev) |

---

## 📋 Divisão de Responsabilidades

### 🔹 Bloco 1 — Modelagem POO
- Criação e validação das classes `Pessoa`, `Cliente`, `Funcionario`, `Administrador` e script `testar.js`.

### 🔹 Bloco 2 — Servidor Express & Estrutura Inicial
- Configuração do Express, roteamento básico e criação dos models de `Livro` e `Categoria`.

### 🔹 Bloco 3 — Catálogo & Métodos HTTP
- Especialização de livros (`LivroFisico`, `LivroDigital`) e `Carrinho`.
- Implementação dos verbos HTTP (GET, POST, PUT, PATCH, DELETE) com middlewares de logging e validações.

### 🔹 Bloco 4 — Integração com MySQL & Tratamento de Erros 🆕
- **Conexão e Pool MySQL:** configuração centralizada em `src/config/db.js` com variáveis de ambiente (`dotenv`).
- **Banco e Relacionamento:** script SQL (`database/livraria.sql`) contendo as tabelas `categorias` e `livros` com relacionamento via chave estrangeira `categoria_id`.
- **Camada de Serviços (`src/services`):** separação de regras de negócio e consultas SQL parametrizadas (`livroService.js` e `categoriaService.js`).
- **Tratamento Global de Erros (`src/middlewares/tratarErros.js`):** captura e mapeamento de códigos do MySQL:
  - `ECONNREFUSED` ➔ `503 Service Unavailable`
  - `ER_DATA_TOO_LONG` / `ER_WARN_DATA_OUT_OF_RANGE` ➔ `400 Bad Request`
  - `ER_NO_REFERENCED_ROW_2` ➔ `400 Bad Request` (categoria informada não existe)
  - `ER_ROW_IS_REFERENCED_2` ➔ `409 Conflict` (categoria possui livros vinculados e não pode ser excluída)
- **Documentação e Testes de API:** exportação de collection para Insomnia e Postman na pasta `docs/` e `.postman/`.

---

## 🗂️ Estrutura de Pastas

```
livraria-api-grupo7/
├── .postman/
│   ├── entrega-bloco3.postman_collection.json
│   └── resources.yaml
├── database/
│   └── livraria.sql
├── docs/
│   ├── diagrama-classes-v2.png
│   └── Insomnia_2026-11-13-14-40-53.yaml
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── categoriaController.js
│   │   └── livroController.js
│   ├── middlewares/
│   │   ├── logger.js
│   │   ├── rotaNaoEncontrada.js
│   │   ├── tratarErros.js
│   │   └── validarId.js
│   ├── models/
│   │   ├── Administrador.js
│   │   ├── Carrinho.js
│   │   ├── Categoria.js
│   │   ├── Cliente.js
│   │   ├── Funcionario.js
│   │   ├── Livro.js
│   │   ├── LivroDigital.js
│   │   ├── LivroFisico.js
│   │   ├── Pessoa.js
│   │   ├── Pessoas.js
│   │   └── testar.js
│   ├── routes/
│   │   ├── categoriaRoutes.js
│   │   ├── index.js
│   │   └── livroRoutes.js
│   ├── services/
│   │   ├── categoriaService.js
│   │   └── livroService.js
│   └── index.js
├── .env.example
├── package.json
├── package-lock.json
└── README.md
```

---

## 📬 Testando as Rotas com o Insomnia

Disponibilizamos o arquivo de exportação das requisições pronto para importação no **Insomnia** dentro da pasta [`docs/`](./docs):

- 📄 **Arquivo:** [`docs/Insomnia_2026-11-13-14-40-53.yaml`](./docs/Insomnia_2026-11-13-14-40-53.yaml)

### Como importar no Insomnia:
1. Abra o **Insomnia**.
2. Clique em **Preferences / Configurações** ou no menu superior de Workspaces.
3. Selecione a opção **Import Data** -> **From File**.
4. Selecione o arquivo `Insomnia_2026-11-13-14-40-53.yaml` localizado na pasta `docs/`.
5. Todas as requisições configuradas (CRUD de Livros e Categorias com exemplos de sucesso e erro) serão carregadas automaticamente.

---

## 🛠️ Tecnologias e Conceitos

- **Node.js** — ambiente de execução JavaScript no servidor
- **Express.js** — framework para criação e roteamento da API REST
- **MySQL / mysql2** — banco de dados relacional e driver com suporte a promises e pool de conexões
- **dotenv** — gerenciamento seguro de variáveis de ambiente
- **Insomnia / Postman** — ferramentas de teste e validação de requisições HTTP
- **JavaScript ES6+** — Classes, POO, async/await, middlewares e arquitetura em camadas (MVC/Services)

---

## 📐 Diagrama de Classes

Confira o diagrama de classes atualizado na pasta `docs/` ou através do link abaixo:

- [Visualizar imagem do diagrama em `docs/diagrama-classes-v2.png`](./docs/diagrama-classes-v2.png)
- [_**Link no Google Drive — Diagrama Grupo 7**_](https://drive.google.com/file/d/1TyP7EVOlvsZ-0Hs9bvbPVX7HSHEepDQm/view)

---

## 🚀 Como Executar o Projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/livraria-api-grupo7.git
cd livraria-api-grupo7
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Configurar o Banco de Dados MySQL
1. Abra o **MySQL Workbench** ou seu cliente MySQL preferido.
2. Execute o script contido em [`database/livraria.sql`](./database/livraria.sql) para criar o banco de dados `livraria`, as tabelas `categorias` e `livros`, e os dados de exemplo.
3. Crie um arquivo `.env` na raiz do projeto com base no `.env.example`:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=livraria
```

### 4. Iniciar a API
```bash
# Modo de desenvolvimento (com nodemon)
npm run dev

# Ou modo tradicional
node src/index.js
```
A API iniciará por padrão em `http://localhost:4200`.

---

<div align="center">

Feito com 💙 pelo **Grupo 7** — SENAI "Santo Paschoal Crepaldi"

</div>
