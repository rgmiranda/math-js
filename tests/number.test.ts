import { describe, expect, it } from "vitest";
import { gcd, mod, lcm } from "../src";

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