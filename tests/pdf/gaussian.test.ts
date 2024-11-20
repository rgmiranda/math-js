import { beforeAll, describe, expect, it } from "vitest";
import { Gaussian } from "../../src/pdf";

describe(Gaussian.name, () => {
    let pdf: Gaussian;
    const m = 0;
    const v = 4;

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
});