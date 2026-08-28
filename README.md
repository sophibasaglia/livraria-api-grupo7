# 📚 API de Gestão da Livraria — Grupo7

> Projeto desenvolvido na Unidade Curricular de **Programação Back-End**
> **Curso Técnico em Desenvolvimento de Sistemas** | Escola SENAI "Santo Paschoal Crepaldi"
> **Turma:** 1-2026-SESI_DEV_OC_1

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=for-the-badge)

</div>

---

## 📌 Sobre o Projeto

O objetivo do projeto é construir a API de gestão de uma livraria aplicando conceitos essenciais de **Programação Orientada a Objetos (POO)** em JavaScript, como **encapsulamento**, **herança** e **polimorfismo**.

O projeto está sendo desenvolvido em blocos incrementais:

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

### 🔹 Bloco 1 — Aula de 07/08/2026

| Integrante | Arquivo / Atribuição | Descrição da Responsabilidade |
| :--- | :--- | :--- |
| **Sophia Basaglia** | `Pessoa.js` | Classe base (`Pessoa`) contendo atributos comuns (como `nome` e `email`) e métodos fundamentais. |
| **Ana Beatriz** | `Cliente.js` | Classe filha (`Cliente`) herdando de `Pessoa`, com atributos específicos (`pontosFidelidade`) e cálculo de desconto. |
| **Victor Vichi** | `Funcionario.js` | Classe filha (`Funcionario`) herdando de `Pessoa` com atributos específicos da equipe (ex: `cargo`, `salario`). |
| **Yohane Moreno** | `testar.js` | Script de testes e validação, instanciando os objetos e verificando a herança e métodos no terminal. |
| **Grupo 7 (Extra)** | `Administrador.js` | Subclasse de `Funcionario` (herança de dois níveis) com métodos exclusivos como `resetarSenha()`. |

### 🔹 Bloco 2 — Aula de 26/08/2026

| Integrante | Arquivo / Atribuição | Descrição da Responsabilidade |
| :--- | :--- | :--- |
| **Sophia Basaglia** | `server.js` / Express | Instalação do Express e inicialização do servidor HTTP rodando na porta definida. |
| **Victor Vichi** | Estrutura de Pastas | Criação das 3 pastas principais do projeto e inclusão dos 3 arquivos de referência. |
| **Yohane Moreno** | `src/models/Livro.js` | Consolidação do model `Livro.js` na nova estrutura de pastas do projeto. |
| **Ana Beatriz** | `src/models/Categoria.js` | Consolidação do model `Categoria.js` na nova estrutura de pastas do projeto. |

### 🔹 Bloco 3 — Novidades do Catálogo 🆕

| Integrante | Arquivo / Atribuição | Descrição da Responsabilidade |
| :--- | :--- | :--- |
| **A definir** | `src/models/LivroFisico.js` | Subclasse de `Livro` com atributos específicos do exemplar físico (ex: `estoque`, `peso`, `localizacao`). |
| **A definir** | `src/models/LivroDigital.js` | Subclasse de `Livro` com atributos específicos do e-book (ex: `formatoArquivo`, `tamanhoMB`, `linkDownload`). |
| **A definir** | `src/models/Carrinho.js` | Classe responsável por agregar itens (`Livro`), calcular totais, aplicar descontos do `Cliente` e gerenciar o fechamento do pedido. |

> ℹ️ *Esta tabela é atualizada a cada bloco com o rodízio de responsabilidades entre os integrantes do grupo.*

---

## 🗂️ Estrutura de Pastas

```
livraria-api-grupo7/
├── src/
│   ├── models/
│   │   ├── Pessoa.js
│   │   ├── Cliente.js
│   │   ├── Funcionario.js
│   │   ├── Administrador.js
│   │   ├── Livro.js
│   │   ├── LivroFisico.js      🆕
│   │   ├── LivroDigital.js     🆕
│   │   ├── Categoria.js
│   │   └── Carrinho.js         🆕
│   ├── routes/
│   └── controllers/
├── testar.js
├── server.js
├── package.json
└── README.md
```

---

## 🧩 Novidades desta Atualização

- 📦 **`LivroFisico.js`** — herda de `Livro` e representa exemplares tangíveis do acervo, controlando estoque e informações logísticas.


- 💻 **`LivroDigital.js`** — herda de `Livro` e representa e-books, controlando dados de arquivo e disponibilidade digital.


- 🛒 **`Carrinho.js`** — nova classe de composição que reúne livros (físicos e/ou digitais) associados a um `Cliente`, permitindo calcular subtotal, aplicar pontos de fidelidade/desconto e finalizar a compra.

Essas classes reforçam, na prática, o conceito de **polimorfismo**: ambas as subclasses de `Livro` podem sobrescrever métodos como `exibirDetalhes()` ou `calcularFrete()`, cada uma com seu próprio comportamento.

---

## 🛠️ Tecnologias e Conceitos

- **Node.js** — execução do código JavaScript no servidor
- **Express.js** — criação e roteamento da API HTTP
- **npm** — gerenciador de pacotes
- **JavaScript ES6+** — `class`, `extends`, `super`, `#privateFields`, Polimorfismo, Herança Multinível e Composição de Objetos

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/livraria-api-grupo7.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd livraria-api-grupo7
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor:**
   ```bash
   node server.js
   ```

5. **Rode os testes (opcional):**
   ```bash
   node testar.js
   ```

---

<div align="center">

Feito com 💙 pelo **Grupo 7** — SENAI "Santo Paschoal Crepaldi"

</div>

