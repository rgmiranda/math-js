export function mod(n: number, m: number): number {
    if (!Number.isInteger(n)) {
        throw new Error('The number must be an integer')
    }

    if (!Number.isInteger(m) || m <= 0) {
        throw new Error('Modulo must be a positive integer');
    }

    return ((n % m) + m) % m;
};

/**
 * Gets the greatest common divisor
 * @param { number } a
 * @param { number } b
 */
export function gcd(a: number, b: number): number {
    if (!Number.isInteger(a) || a <= 0) {
        throw new Error('Both numbers must be positive integers');
    }
    if (!Number.isInteger(b) || b <= 0) {
        throw new Error('Both numbers must be positive integers');
    }
    let d: number;

    do {
        d = Math.abs(a - b);
        a = Math.min(a, b);
        b = d;
    } while (d !== a && d > 0);
    return d;
};

/**
 * Gets least common multiple
 * @param { number } a
 * @param { number } b
 */
export function lcm(a: number, b: number): number {
    if (!Number.isInteger(a) || a <= 0) {
        throw new Error('Both numbers must be positive integers');
    }
    if (!Number.isInteger(b) || b <= 0) {
        throw new Error('Both numbers must be positive integers');
    }
    const d = gcd(a, b);
    return a * b / d;
};

/**
 * Checks if a number is prime
 * @param { number } n
 * @returns { boolean }
 */
export function prime(n: number): boolean {
    if (!Number.isInteger(n) || n <= 0) {
        throw new Error('The number must be positive integer');
    }
    const l = Math.sqrt(n);
    for (let i = 2; i <= l; i++) {
        if ((n % i) === 0) {
            return false;
        }
    }
    return true;
};

/**
 * Checks if a number is prime
 * @param { number } n
 * @returns { number[][] }
 */
export function factors(n: number): number[][] {
    if (!Number.isInteger(n) || n <= 0) {
        throw new Error('The number must be positive integer');
    }

    if (n === 1) {
        return [ [1, 1] ];
    }

    const factors: number[][] = [];
    let i = 2;
    let factor = [i, 0];
    
    while (n > 1) {
        if ((n % i) === 0) {
            n /= i;
            factor[1]++;
        } else {
            i++;
            if (factor[1] > 0) {
                factors.push(factor);
            }
            factor = [i, 0];
        }
    }
    if (factor[1] > 0) {
        factors.push(factor);
    }
    return factors;
};

/**
 * Checks if a number is prime
 * @param { number } m
 * @returns { number }
 */
export function totient(m: number): number {
    if (!Number.isInteger(m) || m <= 0) {
        throw new Error('The number must be positive integer');
    }
    const factorization = factors(m);
    let a = 1;
    let b = 1;
    factorization.forEach(f => {
        a *= f[0];
        b *= f[0] - 1;
    });

    return b * m / a; 
};