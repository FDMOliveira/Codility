//
//   Writing a program that prints the numbers from 1 to n. 
//   For numbers divisible by 3, print "Fizz", 
//   for numbers divisible by five print “Buzz” and for numbers divisible by 7 print "Woof". 
//   For numbers which are multiples of both 3 and 5 print “FizzBuzz”, 
//   both 3 and 7 "FizzWoof", both 5 and 7 "BuzzWoof" 
//   and all of 3, 5 and 7 "FizzBuzzWoof".
//
var n=24;
for (i=1;i<=n;i++) {
    var retorno="";
    if (i % 3 === 0) 
        retorno+="Fizz";
    if (i % 5 === 0)
        retorno+="Buzz";
    if (i % 7 === 0)
        retorno+="Woof";
    if (retorno=="")
        retorno=i;
    console.log(retorno);
}