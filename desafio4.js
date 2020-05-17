//A seguinte sequência de números 0 1 1 2 3 5 8 13 21... é conhecida como série de Fibonacci. Nessa sequência, cada número, depois dos 2 primeiros, é
//igual à soma dos 2 anteriores. Escreva um algoritmo que leia um inteiro N (N < 46) e mostre os N primeiros números dessa série.
//• Entrada
//   O arquivo de entrada contém um valor inteiro N (0 < N < 46)
//• Saída
//   Os valores devem ser mostrados na mesma linha, separados por um espaço em branco. Não deve haver espaço após o último valor.

function desafio4(numero){

    let entrada = numero;
    let n1 = 0;
    let n2 = 1;
    let soma = 0;

    if(entrada < 46 ){
        for(let i = 0 ; i < entrada ; i++){
            console.log ( n1);
            soma = n1 + n2;
            n1 = n2;
            n2 = soma;
        }
    }
}

desafio4(5);