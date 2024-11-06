import { describe, expect, it } from "vitest";
import { Poisson } from "../../src";

describe(Poisson.name, () => {
    const poissonData = [
        {l: 2, x: 0, expected: 0.1353},
        {l: 2, x: 1, expected: 0.2707},
        {l: 2, x: 2, expected: 0.2707},
        {l: 2, x: 3, expected: 0.1804},
        {l: 2, x: 4, expected: 0.0902},
        {l: 5, x: 4, expected: 0.1755},
    ];

    it.each(poissonData)('calculates the probability', ({l, x, expected}) => {
        const poisson = new Poisson(l);
        const result = poisson.probability(x);
        expect(result).toBeCloseTo(expected, 3);
    });

    it('retrieves a value', () => {
        const poisson = new Poisson(2);
        const result = poisson.getValue();
        expect(result).toBeGreaterThanOrEqual(0);
    });
    
    it('fails on invalid experiments number', () => {
        expect(() => new Poisson(-9)).toThrowError();
        expect(() => new Poisson(9.5)).toThrowError();
    });

    it('fails on invalid value', () => {
        const poisson = new Poisson(9);
        expect(() => poisson.probability(1.1)).toThrowError();
        expect(() => poisson.probability(-1)).toThrowError();
    });
});