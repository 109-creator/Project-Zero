function isPrime(n) {
    if (n < 2) { return false; }
    if (n === 2) { return true; }
    for (let k = 2; k < n; k++) {
        if (n % k === 0) {
            return false; 
            break
        }
    }
    return true;
}

function listPrimes(limit) {
    for (let i = 2; i < limit; i++) {
        if (isPrime(i) === true) { console.log(i); }    
    }
}

listPrimes(50);