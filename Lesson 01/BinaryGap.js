var n=5;
var curr;
var max = 0;
while(n !== 0 && n % 2 === 0) {
    n >>>= 1;
}
for(curr=0; n !== 0; n>>>=1) { 
    if(n % 2 === 0) { 
        curr++; 
    } else { 
        curr = 0; 
    } 
    max = Math.max(maxZeros, curr); 
} 
console.log(max); 