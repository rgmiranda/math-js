import { beforeAll, describe, expect, it } from "vitest";
import { Uniform } from "../../src/pdf";

describe(Uniform.name, () => {
    let pdf: Uniform;
    const min = -10;
    const max = 10;

    beforeAll(() => {
        pdf = new Uniform(min, max);
    });

    it('gets values', () => {
        const values = Array(10).fill(false).map(() => pdf.getValue());
        values.forEach(v => {
            expect(v).toBeGreaterThanOrEqual(min);
            expect(v).toBeLessThanOrEqual(max);
        });
    });

    it('gets the mean', () => {
        const result = pdf.getMean();
        expect(result).toBe(0);
    });

    it('gets the accumulated', () => {
        expect(pdf.getAccumulated(-10)).toBe(0);
        expect(pdf.getAccumulated(0)).toBe(0.5);
        expect(pdf.getAccumulated(10)).toBe(1);
    });
});