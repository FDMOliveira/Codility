var A=[2];
var n;
var resultado=0;
var total = A.length+1;
var sum = (total* (total+1) ) / 2;
for (i=0;i<A.length;i++)
    resultado+=A[i];
n= sum-resultado;
console.log(`N: : ${n}`);