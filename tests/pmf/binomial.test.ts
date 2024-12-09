import { describe, expect, it } from "vitest";
import { Binomial } from "../../src";

describe(Binomial.name, () => {
    const binomialData = [
        {n: 1, p: 0.5, x: 1, expected: 0.5},
        {n: 2, p: 0.5, x: 2, expected: 0.25},
        {n: 3, p: 0.5, x: 0, expected: 0.125},
        {n: 3, p: 0.5, x: 3, expected: 0.125},
    ];

    it.each(binomialData)('calculates the probability', ({n, p, x, expected}) => {
        const binomial = new Binomial(n, p);
        const result = binomial.probability(x);
        expect(result).toBe(expected);
    });

    it('retrieves a value', () => {
        const binomial = new Binomial(9, 0.5);
        const result = binomial.getValue();
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(9);
    });

    it('gets the accumulated', () => {
        const binomial = new Binomial(5, 0.5);
        expect(binomial.getAccumulated(-1)).toBe(0);
        expect(binomial.getAccumulated(5)).toBe(1);
        expect(binomial.getAccumulated(2)).toBe(0.5);
        expect(binomial.getAccumulated(2.9)).toBe(0.5);
    });

    it('fails on invalid success probaility', () => {
        expect(() => new Binomial(9, 1.5)).toThrowError();
        expect(() => new Binomial(9, -0.4)).toThrowError();
    });    

    it('fails on invalid value', () => {
        const binomial = new Binomial(9, 0.5);
        expect(() => binomial.probability(10)).toThrowError();
        expect(() => binomial.probability(-1)).toThrowError();
    });
});