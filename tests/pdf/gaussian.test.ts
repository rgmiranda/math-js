import { beforeAll, describe, expect, it } from "vitest";
import { Gaussian } from "../../src/pdf";

describe(Gaussian.name, () => {
    let pdf: Gaussian;
    const m = 0;
    const v = 1;
    const sd = Math.sqrt(v);

    beforeAll(() => {
        pdf = new Gaussian(m, v);
    });

    it('gets values', () => {
        const result = pdf.getValue();
        expect(typeof result).toBe('number');
    });

    it('gets the mean', () => {
        const result = pdf.getMean();
        expect(result).toBe(0);
    });

    it('gets the accumulated', () => {
        expect(pdf.getAccumulated(-3 * sd)).toBeCloseTo(0.00135, 4);
        expect(pdf.getAccumulated(-2 * sd)).toBeCloseTo(0.02275, 4);
        expect(pdf.getAccumulated(-1 * sd)).toBeCloseTo(0.15866, 4);
        expect(pdf.getAccumulated(0 * sd)).toBeCloseTo(0.5, 4);
        expect(pdf.getAccumulated(1 * sd)).toBeCloseTo(0.84134, 4);
        expect(pdf.getAccumulated(2 * sd)).toBeCloseTo(0.97725, 4);
        expect(pdf.getAccumulated(3 * sd)).toBeCloseTo(0.99865, 4);
    });
});