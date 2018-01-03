var numero =0;
const x = [1,5,4,3,9,2,3,1,4,5,9]
for (i=0;i<x.length;i++) {
        numero = numero ^x[i];
    }
console.log(numero);