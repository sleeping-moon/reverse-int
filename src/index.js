module.exports = function reverse (n) {
    let b, sum = 0;
      while(n > 0) { 
          b = n % 10; 
          sum = sum * 10 + b;
           n = parseInt(n / 10);
         } 
    return sum;
}
