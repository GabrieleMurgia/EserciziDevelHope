function memoize(fn) {
  let cache = {};
  return function(n){
    let result=n;
    
    if(cache[result] !== undefined){
      console.log(cache)
      return cache[result];
    }
    result = fn(n);
    cache[n]=result;
    
    return cache[n];
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);



console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(10))
console.log(factorial(7));


