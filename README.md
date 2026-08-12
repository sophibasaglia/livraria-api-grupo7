# 📚 API de Gestão da Livraria — Grupo 7

> Projeto desenvolvido na Unidade Curricular de **Programação Back-End**  
> **Curso Técnico em Desenvolvimento de Sistemas** | Escola SENAI "Santo Paschoal Crepaldi"  
> **Turma:** 1-2026-SESI_DEV_OC_1  

---

## 📌 Sobre o Projeto

O objetivo do projeto é construir a API de gestão de uma livraria aplicando conceitos essenciais de **Programação Orientada a Objetos (POO)** em JavaScript, como encapsulamento, herança e polimorfismo.

Na **Atividade 03 — Pessoas da Livraria**, o foco foi modelar o cadastro de pessoas que interagem com o sistema (clientes, funcionários e administradores), utilizando uma estrutura hierárquica com herança em múltiplos níveis:  
`Pessoa` ➔ `Cliente`  
`Pessoa` ➔ `Funcionario` ➔ `Administrador`

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

> ℹ️ *Esta tabela é atualizada a cada bloco com o rodízio de responsabilidades entre os integrantes do grupo.*

---

## 🛠️ Tecnologias e Conceitos

- **Node.js** (Execução do código JavaScript no servidor)
- **npm** (Gerenciador de pacotes)
- **JavaScript ES6+** (`class`, `extends`, `super`, `#privateFields`, Polimorfismo e Herança Multinível)

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/livraria-api-grupo7.git](https://github.com/seu-usuario/livraria-api-grupo7.git)