//
//   Writing a program that prints the numbers from 1 to n. 
//   For numbers divisible by three, print "Fizz", 
//   for numbers divisible by five print “Buzz” and for numbers divisible by 7 print "Woof". 
//   For numbers which are multiples of both 3 and 5 print “FizzBuzz”, 
//   both 3 and 7 "FizzWoof", both 5 and 7 "BuzzWoof" 
//   and all of 3, 5 and 7 "FizzBuzzWoof".
//

var n=24;
var retorno="";
for (i=1;i<=n;i++) {
    if (i % 3 === 0) {
        if(i % 5 === 0) {
            if(i % 7 === 0) {
                retorno="FizzBuzzWoof";
            }
            else
            retorno="FizzBuzz";
        }
        else
        if (i % 7 === 0)
            retorno="FizzWoff";
        else
        retorno="Fizz";
    }
    else
    if (i % 5 === 0) {
        if (i % 7 === 0)
            retorno="BuzzWoof";
            else
            retorno="Buzz";
    }
    else
    if (i % 7 === 0)
        retorno="Woof";
    else
    retorno=i;
    console.log(retorno);
}