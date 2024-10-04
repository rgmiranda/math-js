export function mod(n: number, m: number): number {
    if (!Number.isInteger(n)) {
        throw new Error(`Non integer received: ${n}`)
    }

    if (!Number.isInteger(m)) {
        throw new Error(`Non integer received: ${m}`)
    }
    
    if (m <= 0) {
        throw new Error(`Modulo must be positive: ${m}`)
    }

    while (n < 0) {
        n += m;
    }

    return n % m;
};