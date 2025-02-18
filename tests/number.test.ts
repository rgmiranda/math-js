import { describe, expect, it } from "vitest";
import { gcd, mod, lcm, factors, totient, prime, collatz, digitalRoots } from "../src";

describe(mod.name, () => {
    const testData: number[][] = [
        [1, 4, 1],
        [-1, 4, 3],
        [-1, 13, 12],
        [-13, 13, 0],
        [-5, 4, 3],
        [-7, 9, 2],
        [-8, 4, 0],
        [-6, 5, 4],
    ];

    it.each(testData)('calculates modulo', (n, m, expected) => {
        const result = mod(n, m);
        expect(result).toBe(expected);
    });

    it('fails on negative modulo', () => {
        expect(() => { mod(1, -8); }).toThrowError('Modulo must be a positive integer')
    });

    it('fails on non-integer number', () => {
        expect(() => { mod(1.5, 8); }).toThrowError('The number must be an integer')
        expect(() => { mod(1, 8.3); }).toThrowError('Modulo must be a positive integer')
    });
});

describe(gcd.name, () => {
    const testData: number[][] = [
        [6, 4, 2],
        [18, 22, 2],
        [18, 4, 2],
        [42, 49, 7],
        [81, 45, 9],
        [21, 13, 1],
        [18, 18, 18],
    ];
    
    it.each(testData)('calculates greatest common divisor', (n, m, expected) => {
        const result = gcd(n, m);
        expect(result).toBe(expected);
    });
    
    it('fails on negative value', () => {
        expect(() => { gcd(1, -8); }).toThrowError('Both numbers must be positive integers')
    });
    
    it('fails on non-integer number', () => {
        expect(() => { gcd(1.5, 8); }).toThrowError('Both numbers must be positive integers');
    });
});

describe(lcm.name, () => {
    const testData: number[][] = [
        [6, 4, 12],
        [5, 7, 35],
        [12, 15, 60],
        [18, 4, 36],
    ];
    
    it.each(testData)('calculates least common multiple', (n, m, expected) => {
        const result = lcm(n, m);
        expect(result).toBe(expected);
    });
    
    it('fails on negative value', () => {
        expect(() => { lcm(1, -8); }).toThrowError('Both numbers must be positive integers')
    });

    it('fails on non-integer number', () => {
        expect(() => { lcm(1.5, 8); }).toThrowError('Both numbers must be positive integers');
    });
});

describe(prime.name, () => {
    const testData: any[][] = [
        [6, false],
        [25, false],
        [49, false],
        [1, true],
        [5, true],
        [2, true],
        [3, true],
        [12, false],
        [18, false],
        [59, true],
        [13, true],
        [7, true],
    ];
    
    it.each(testData)('detects prime number', (n, expected) => {
        const result = prime(n);
        expect(result).toBe(expected);
    });
    
    it('fails on negative value', () => {
        expect(() => { prime(-8); }).toThrowError('The number must be positive integer')
    });

    it('fails on non-integer number', () => {
        expect(() => { prime(1.5); }).toThrowError('The number must be positive integer');
    });
});

describe(factors.name, () => {
    const testData: any[][] = [
        [6, [ [2, 1], [3, 1] ] ],
        [7, [ [7, 1] ] ],
        [1, [ [1, 1] ] ],
        [15, [ [3, 1], [5, 1] ] ],
        [48, [ [2, 4], [3, 1] ] ],
        [16, [ [2, 4] ] ],
        [72, [ [2, 3], [3, 2] ] ],
        [100, [ [2, 2], [5, 2] ] ],
    ];
    
    it.each(testData)('detects factors from number', (n, expected) => {
        const result = factors(n);
        expect(result).toEqual(expected);
    });
    
    it('fails on negative value', () => {
        expect(() => { factors(-8); }).toThrowError('The number must be positive integer')
    });

    it('fails on non-integer number', () => {
        expect(() => { factors(1.5); }).toThrowError('The number must be positive integer');
    });
});

describe(totient.name, () => {
    const testData: any[][] = [
        [100, 40],
        [10, 4],
        [32, 16],
        [5, 4],
        [101, 100],
        [103, 102],
    ];
    
    it.each(testData)('get totient of number', (n, expected) => {
        const result = totient(n);
        expect(result).toBe(expected);
    });
    
    it('fails on negative value', () => {
        expect(() => { totient(-8); }).toThrowError('The number must be positive integer')
    });

    it('fails on non-integer number', () => {
        expect(() => { totient(1.5); }).toThrowError('The number must be positive integer');
    });
});

describe(collatz.name, () => {
    const testData: any[][] = [
        [5, 10000, [ 5, 16, 8, 4, 2, 1 ]],
        [5, 4, [ 5, 16, 8, 4 ]],
    ];
    
    it.each(testData)('get collatz sequence of a number', (n, limit, expected) => {
        const result = collatz(n, limit);
        expect(result).toEqual(expected);
    });
    
    it('fails on negative value', () => {
        expect(() => { collatz(-8); }).toThrowError('The number must be positive integer')
    });

    it('fails on non-integer number', () => {
        expect(() => { collatz(1.5); }).toThrowError('The number must be positive integer');
    });
});

describe(digitalRoots.name, () => {
    const testData: any[][] = [
        [5, 5],
        [54, 9],
        [55, 1],
        [7391, 2],
        [19999999, 1],
    ];
    
    it.each(testData)('gets the digital roots sequence of a number', (n, expected) => {
        const result = digitalRoots(n);
        expect(result).toBe(expected);
    });
    
    it('fails on negative value', () => {
        expect(() => { digitalRoots(-8); }).toThrowError('The number must be positive integer')
    });

    it('fails on non-integer number', () => {
        expect(() => { digitalRoots(1.5); }).toThrowError('The number must be positive integer');
    });
});