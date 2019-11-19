// Usando a função console.log();
// Faça um switch para imprimir 
// Um campeão do lol baseado na função no jogo

var campeao = '';
var campeao1 = '';
var input = 'mid'; // Seu prompt();
switch(input) {
  case 'ADCarry':
    campeao = 'draven'
    campeao1 = 'caitlyn'
    break;
  case 'support':
    campeao = 'nautilus'
    campeao1 = 'lulu'
    break;
  case 'mid':
    campeao = 'viktor'
    campeao1 = 'zed'
    break;

  default:
    campeao = 'Role inválida'
}
console.log('O input foi:', input);
console.log('O campeão é:', campeao);
console.log('O campeão é:', campeao1);