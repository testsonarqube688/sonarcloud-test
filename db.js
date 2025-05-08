// Simulando SQL Injection (NÃO FAÇA ISSO NA VIDA REAL!)
function buscarUsuario(nome) {
  const query = "SELECT * FROM usuarios WHERE nome = '" + nome + "'";
  console.log('Executando:', query); // Expondo query diretamente
  // Aqui normalmente estaria: db.execute(query)
}

module.exports = { buscarUsuario };
