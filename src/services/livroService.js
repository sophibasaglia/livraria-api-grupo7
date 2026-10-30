
const { db } = require("../config/db");

function validarLivro(dados, completo) {
  if (!dados) return "Envie os dados do livro em JSON";

  if (completo && !dados.titulo) return "O titulo e obrigatorio";
  if (completo && !dados.autor) return "O autor e obrigatorio";
  if (completo && dados.preco === undefined) return "O preco e obrigatorio";
  if (completo && dados.estoque === undefined) return "O estoque e obrigatorio";

  if (dados.preco !== undefined && (typeof dados.preco !== "number" || dados.preco < 0)) {
    return "O preco deve ser um numero maior ou igual a zero";
  }
  if (dados.estoque !== undefined && (typeof dados.estoque !== "number" || dados.estoque < 0)) {
    return "O estoque deve ser um numero maior ou igual a zero";
  }

  return null;
}

async function listarLivros(filtros = {}) {
  const [linhas] = await db.query("SELECT * FROM livros");
  let resultado = linhas;
  if (filtros.autor) {
    resultado = resultado.filter((l) =>
      l.autor && l.autor.toLowerCase().includes(String(filtros.autor).toLowerCase())
    );
  }
  if (filtros.titulo) {
    resultado = resultado.filter((l) =>
      l.titulo && l.titulo.toLowerCase().includes(String(filtros.titulo).toLowerCase())
    );
  }
  if (filtros.precoMax) {
    resultado = resultado.filter((l) => l.preco <= Number(filtros.precoMax));
  }
  if (filtros.precoMin) {
    resultado = resultado.filter((l) => l.preco >= Number(filtros.precoMin));
  }
  return resultado.map((l) => (typeof l.toJSON === "function" ? l.toJSON() : l));
}

   
async function buscarLivroPorId(id) {
const [linhas] = await db.query("SELECT * FROM livros WHERE id = ?", [id]);
return linhas[0];
}

async function criarLivro(dados) {
const [resultado] = await db.query(
"INSERT INTO livros (titulo, autor, preco, estoque) VALUES (?, ?, ?, ?)",
[dados.titulo, dados.autor, dados.preco, dados.estoque],
);
return await buscarLivroPorId(resultado.insertId);
}

async function atualizarLivro(id, dados) {
  const [resultado] = await db.query(
    
    "UPDATE livros SET titulo = ?, autor = ?, preco = ?, estoque = ? WHERE id = ?",
    [dados.titulo, dados.autor, dados.preco, dados.estoque, id],
  );

  if (resultado.affectedRows === 0) return null;
  return await buscarLivroPorId(id);
}

async function atualizarParcialLivro(id, dados) {
  const livro = await buscarLivroPorId(id);
  if (!livro) return null;
  if (dados.titulo !== undefined) livro.titulo = dados.titulo;
  if (dados.autor !== undefined) livro.autor = dados.autor;
  if (dados.preco !== undefined) livro.preco = dados.preco;
  if (dados.estoque !== undefined) livro.estoque = dados.estoque;
  return await atualizarLivro(id, livro);
}

async function deletarLivro(id) {
  const [resultado] = await db.query("DELETE FROM livros WHERE id = ?", [id]);
return resultado.affectedRows > 0;
}

module.exports = {
  validarLivro,
  listarLivros,
  buscarLivroPorId,
  criarLivro,
  atualizarLivro,
  atualizarParcialLivro,
  deletarLivro,
};
