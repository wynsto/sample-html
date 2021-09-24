
  function isPrime(n, i = 2) {
		// corner cases
		if (n == 0 || n == 1) {
		  return false;
		}

    if (n == i) {
      set.add(n)
      return true
    }

		// base cases
		if (n % i == 0) {
		  return false;
		}
    i++;
		return isPrime(n, i);
	}

  function getHighestPrime(num) {
    var i = 1; 
    for(let j = 2; j <= num;j++) 
    { 
      if(j == num) 
      { 
        i = num; 
        break;
      } 
      if(num% j==0) 
      { 
          num--; 
      } 
    }
    console.log(i)
    return i; 
  }
  // console.log(isPrime(2000000))
  getHighestPrime(2000000000)
