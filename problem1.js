// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.


//solution1
function multiplesOf3and5(number) {

   var sum=0; 
for (var i=1;i<number;i++){
   if(i%5==0 || i%3==0){
    sum+=i
   }
}
return sum

}

console.log(multiplesOf3and5(10));


//solution2
