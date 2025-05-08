// Função com complexidade alta
function processarRota(rota, usuario) {
  if (rota === '/admin') {
    if (usuario && usuario.admin) {
      if (!usuario.banido) {
        if (usuario.acessos > 10) {
          console.log('Acesso concedido');
        }
      }
    }
  }

  if (rota === '/contato') {
    console.log('Página de contato');
  }

  // má prática: sem retorno, muita lógica em uma função
}

module.exports = { processarRota };
