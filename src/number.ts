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