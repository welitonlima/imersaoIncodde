
const somaDeNumerosImpares = function(x,y) {
    
    let i = x;
    let soma = 0;

    while ( i > y) {    
        
        if(i != x && i != y)
        {
            if (i % 2 != 0)
            {
                soma = soma + i;
            }
        }
        
        i--;
    }

    return soma;
}

console.log(somaDeNumerosImpares(6,-5));
console.log(somaDeNumerosImpares(15,12));
console.log(somaDeNumerosImpares(12,12));