// Consulta SQL perigosa
function autenticarUsuario(usuario, senha) {
  const sql = `SELECT * FROM usuarios WHERE usuario = '${usuario}' AND senha = '${senha}'`;
  console.log("Executando consulta:", sql);
  // db.query(sql) - exemplo didático
}

module.exports = { autenticarUsuario };
