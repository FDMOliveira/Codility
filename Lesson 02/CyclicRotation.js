//  
//  Elementos do array movem-se X posições para a direita
//  Quando chegar ao fim do array, voltam ao incio
//
var a=[1,2,3,4,5,6,7,8];
var x=3;
var ultima;
for (i=0;i<x; i++)
{   
    if (a!=0)
    {
    ultima = a.pop();     //  Retira o último elemento do array e retorna-o para a var ultima;
    a.unshift(ultima);   //   Introduz o último elemento no inicio do array
    }
}