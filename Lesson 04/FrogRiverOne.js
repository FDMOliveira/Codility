var C = new Set();
var A=[2,2,2,2,2];
var X=2;
var valor=0;
for (i=0;i<A.length;i++)
{
    if(A[i]<=X)
        C.add(A[i]);      
    if(C.size == X) 
    {
        valor = i;
        break;
    }
    valor =-1;
}
console.log(valor);