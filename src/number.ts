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
    if (a === b) {
        return a;
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
 * Get the prime factorization of a positive integer
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
 * Gets the totient of a posite integer
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

/**
 * Generates de Collatz sequence
 * @param { number } n
 * @param { number } limit
 * @returns { number }
 */
export function collatz(n: number, limit: number = 10000): number[] {
    if (!Number.isInteger(n) || n <= 0) {
        throw new Error('The number must be positive integer');
    }

    const seq = [n];

    for (let i = 1; i < limit; i++) {
        if (n === 1) {
            break;
        }
        if ((n % 2) === 0) {
            n = n * 0.5;
        } else {
            n = 3 * n +1;
        }
        seq.push(n);
    }

    return seq;
};

/**
 * Gets the digital roots of a positive integer
 * @param { number } n
 * @returns { number }
 */
export function digitalRoots(n: number): number {
    if (!Number.isInteger(n) || n <= 0) {
        throw new Error('The number must be positive integer');
    }
    if (n < 10) {
        return n;
    }
    do {
        let chars = n.toString().split('');
        n = chars.reduce((prev, c) => prev += Number(c), 0);
    } while (n >= 10);

    return n;
};