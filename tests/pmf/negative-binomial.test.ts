import { describe, expect, it } from "vitest";
import { NegativeBinomial } from "../../src";

describe(NegativeBinomial.name, () => {
    const binomialData = [
        {r: 1, p: 0.5, x: 0, expected: 0.5},
        {r: 1, p: 0.5, x: 1, expected: 0.25},
        {r: 1, p: 0.5, x: 2, expected: 0.125},
        {r: 2, p: 0.5, x: 0, expected: 0.25},
        {r: 2, p: 0.5, x: 1, expected: 0.25},
    ];

    it.each(binomialData)('calculates the probability', ({r, p, x, expected}) => {
        const binomial = new NegativeBinomial(r, p);
        const result = binomial.probability(x);
        expect(result).toBe(expected);
    });

    it('retrieves a value', () => {
        const binomial = new NegativeBinomial(2, 0.5);
        const result = binomial.getValue();
        expect(result).toBeGreaterThanOrEqual(0);
    });
    
    it('fails on invalid experiments number', () => {
        expect(() => new NegativeBinomial(-9, 1)).toThrowError();
        expect(() => new NegativeBinomial(9.5, 1)).toThrowError();
    });

    it('fails on invalid success probaility', () => {
        expect(() => new NegativeBinomial(9, 1.5)).toThrowError();
        expect(() => new NegativeBinomial(9, -0.4)).toThrowError();
    });    

    it('fails on invalid value', () => {
        const binomial = new NegativeBinomial(9, 0.5);
        expect(() => binomial.probability(1.1)).toThrowError();
        expect(() => binomial.probability(-1)).toThrowError();
    });
});