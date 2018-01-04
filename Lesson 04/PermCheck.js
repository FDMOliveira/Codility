var A=[1,4,1];
var TotalLenght = A.length;
var sum = (TotalLenght * (TotalLenght + 1)) /2;
var sum2=0;
var resultado, prev;
var duplicado = false;
   
A.sort(); // Ordena o array segundo a identificação de cada caractére
         // na tabela de valores unicode
for ( var i = 0; i < A.length; i++ ) {
    if ( A[i] == prev )
        duplicado=true;            
    prev = A[i];
}

for (i=0;i<TotalLenght;i++)
sum2+=A[i];

if ( (sum!=sum2) || duplicado == true) 
    resultado=0;
    else
    resultado=1;

console.log(resultado);