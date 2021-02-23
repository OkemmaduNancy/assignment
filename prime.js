function prime(p) {

    if ([p] === 1) {
        return false;
    }
    else if (p === 2) {
        return true;
    } else {
        for (let i = 2; i < p; i++) {
            if (p % i === 0) {
                return false;
            }
        }
        return true;
    }
}

const value = prime(12)
console.log(value);





