import { describe, expect, it } from "vitest";
import { binomial } from "../src";

describe(binomial.name, () => {
    const binomialData = [
        {n: 1, p: 0.5, x: NaN, expected: [0.5, 0.5]},
        {n: 1, p: 0.5, x: 1, expected: 0.5},
        {n: 2, p: 0.5, x: NaN, expected: [0.25, 0.5, 0.25]},
        {n: 2, p: 0.5, x: 2, expected: 0.25},
        {n: 3, p: 0.5, x: 0, expected: 0.125},
        {n: 3, p: 0.5, x: 3, expected: 0.125},
    ];

    it.each(binomialData)('calculates the binomial distribution', ({n, p, x, expected}) => {
        expect(binomial(n, p, x)).toEqual(expected);
    });
    
    it('fails on invalid experiments number', () => {
        expect(() => binomial(-9, 1)).toThrowError();
        expect(() => binomial(9.5, 1)).toThrowError();
    });

    it('fails on invalid success probaility', () => {
        expect(() => binomial(9, 1.5)).toThrowError();
        expect(() => binomial(9, -0.4)).toThrowError();
    });    

    it('fails on invalid value', () => {
        expect(() => binomial(9, 0.5, 10)).toThrowError();
        expect(() => binomial(5, 0.5, -1)).toThrowError();
    });
});