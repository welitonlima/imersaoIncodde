//Descrição:Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas
//consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.
//• Entrada
//O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).
//• Saída
//Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir
//o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.

function desafio5(numero)
{
    let valor = numero;

    if( valor > 0 && valor < 1000000)
    {
        let notas = [100,50,20,10,5,2,1];
        let n = 0;
        let total = 0;

        console.log("Valor R$ " + numero);

        for(let n=0; valor > 0 && n < notas.length; n++)
        {
            total = Math.floor( valor / notas[n]);
            console.log( total + " nota(s) de R$ " + notas[n]);
            valor =- ((total * notas[n]) - valor);
        }
    }

}

desafio5(576);
desafio5(11257);
desafio5(503);