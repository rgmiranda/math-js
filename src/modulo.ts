export function mod(n: number, m: number): number {
    if (!Number.isInteger(n)) {
        throw new Error('The number must be an integer')
    }

    if (!Number.isInteger(m) || m <= 0) {
        throw new Error('Modulo must be a positive integer');
    }

    return ((n % m) + m) % m;
};