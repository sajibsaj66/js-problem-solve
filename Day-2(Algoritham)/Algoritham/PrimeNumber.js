// Verify a prime number?

function isPrime(number){

  const divisor = 2;
  while(number > divisor){
    if(number %divisor == 0){
      return false;
    }
    else{
      divisor ++;
    }
    return true;
  }
}
console.log(isPrime(110));