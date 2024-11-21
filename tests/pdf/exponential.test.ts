import { beforeAll, describe, expect, it } from "vitest";
import { Exponential } from "../../src";

describe(Exponential.name, () => {
    let pdf: Exponential;
    const m = 2;

    beforeAll(() => {
        pdf = new Exponential(m);
    });

    it('gets values', () => {
        const values = Array(10).fill(false).map(() => pdf.getValue());
        values.forEach(v => {
            expect(v).toBeGreaterThanOrEqual(0);
        });
    });

    it('gets the mean', () => {
        const result = pdf.getMean();
        expect(result).toBe(m);
    });

    it('gets the accumulated', () => {
        expect(pdf.getAccumulated(-10)).toBe(0);
        expect(pdf.getAccumulated(0)).toBe(0);
        expect(pdf.getAccumulated(m)).toBeCloseTo(1 - (1 / Math.E), 5);
        expect(pdf.getAccumulated(m * Math.log(2))).toBeCloseTo(0.5, 5);
    });
});