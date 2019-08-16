let nome = 'João';
let idade = 18;
const sexo = 'M';

if((nome === 'Vinicius' || idade === 18 ) &&
(sexo ==='M' || nome ==='Felipe'))
{
console.log('Entrou no if')
}else {
    console.log('Entrou no Else');
}


if (idade >= 18 && sexo == 'M') {
    console.log('Você não possui desconto');
}else if (sexo === 'F' && idade <18) {
    console.log('Você tem 20% de desconto e um refrigerante');
}else if (sexo === 'F') {
    console.log('Você tem 20% de desconto');
}else {
    console.log('Você tem 10% de desconto')
}