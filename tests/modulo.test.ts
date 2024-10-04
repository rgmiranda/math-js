import { describe, expect, it } from "vitest";
import { mod } from "../src";

describe(mod.name, () => {
    const testData: number[][] = [
        [1, 4, 1],
        [-1, 4, 3],
        [-1, 13, 12],
        [-13, 13, 0],
        [-5, 4, 3],
        [-7, 9, 2],
    ];

    it.each(testData)('calculates modulo', (n, m, expected) => {
        const result = mod(n, m);
        expect(result).toBe(expected);
    });

    it('fails on negative modulo', () => {
        expect(() => { mod(1, -8); }).toThrowError('Modulo must be positive: -8')
    });

    it('fails on non-integer number', () => {
        expect(() => { mod(1.5, 8); }).toThrowError('Non integer received: 1.5')
        expect(() => { mod(1, 8.3); }).toThrowError('Non integer received: 8.3')
    });
});