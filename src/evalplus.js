// Executa código de string dentro de outra função
function executarComando(comando) {
  const func = new Function(comando); // alternativa ao eval, tão perigosa quanto
  func(); // executa
}

module.exports = { executarComando };
