function validarId(req, res, next) {
  const id = req.params.id;
  if (!id || id.trim() === "" || isNaN(Number(id))) {
    res.status(400).json({ erro: "O id deve ser um numero" });
    return;
  }
  next();
}

module.exports = validarId;
