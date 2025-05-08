// BUG: Comparação incorreta
var valor = 10;
if (valor = 5) {  // deveria ser ===
  console.log('Valor é 5');
}

// VULNERABILIDADE: uso de eval
function executarCodigoDinamico(codigo) {
  eval(codigo); // NUNCA use eval!
}

// VULNERABILIDADE: uso de Function (equivalente ao eval)
const executaViaFunction = new Function("console.log('executando via Function')");

// CÓDIGO MORTO: função nunca usada
function funcaoInutil() {
  console.log('Essa função nunca é chamada');
}

// MÁ PRÁTICA: uso de var e comparação com ==
var resultado = "5";
if (resultado == 5) {
  console.log('Usando == ao invés de ===');
}

// DUPLICAÇÃO: funções com mesmo comportamento
function somar(a, b) {
  return a + b;
}

function somarNovamente(x, y) {
  return x + y;
}

// COMPLEXIDADE: função com muitos ifs aninhados
function processarNivel(nivel) {
  if (nivel > 0) {
    if (nivel < 10) {
      if (nivel % 2 === 0) {
        if (nivel !== 4) {
          console.log('Nível válido');
        }
      }
    }
  }
}

// VARIÁVEL GLOBAL
globalLeak = "isso é global sem var/let/const"; // cria uma global não intencional

// FALTA DE VALIDAÇÃO: entrada do usuário usada diretamente
function simularLogin(usuario, senha) {
  console.log(`Login de ${usuario} com a senha ${senha}`); // exposição de dados sensíveis
}

module.exports = {
  executarCodigoDinamico,
  executaViaFunction,
  somar,
  somarNovamente,
  simularLogin,
  processarNivel
};
