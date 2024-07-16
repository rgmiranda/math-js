import { describe, expect, it } from "vitest";
import { Line } from "../src/line";
import { Vector } from "../src";

describe(Line.name, () => {
    it('creates a new instance', () => {
        const l = new Line(1, 4);
        expect(l).toBeInstanceOf(Line);
    });

    it('creates instance from two points', () => {
        let l: Line;

        l = Line.fromPoints(new Vector(1, 1), new Vector(2, 2));
        expect(l).toBeInstanceOf(Line);
        expect(l.m).toBe(1);
        expect(l.a).toBe(0);

        l = Line.fromPoints(new Vector(0, 1), new Vector(-1, 2));
        expect(l).toBeInstanceOf(Line);
        expect(l.m).toBe(-1);
        expect(l.a).toBe(1);

        l = Line.fromPoints(new Vector(-1, 3), new Vector(1, 1));
        expect(l).toBeInstanceOf(Line);
        expect(l.m).toBe(-1);
        expect(l.a).toBe(2);

        l = Line.fromPoints(new Vector(-1, 1), new Vector(1, 1));
        expect(l).toBeInstanceOf(Line);
        expect(l.m).toBeCloseTo(0, 6);
        expect(l.a).toBe(1);

        l = Line.fromPoints(new Vector(1, -1), new Vector(1, 1));
        expect(l).toBeInstanceOf(Line);
        expect(l.m).toBe(undefined);
        expect(l.a).toBe(1);
    });

    it('retrieves mediatrix from two points', () => {
        let l: Line;

        l = Line.mediatrix(new Vector(0, 0), new Vector(0, 2));
        expect(l).toBeInstanceOf(Line);
        expect(l.m).toBeCloseTo(0, 6);
        expect(l.a).toBeCloseTo(1, 6);

        l = Line.mediatrix(new Vector(0, 0), new Vector(2, 2));
        expect(l).toBeInstanceOf(Line);
        expect(l.m).toBeCloseTo(-1, 6);
        expect(l.a).toBeCloseTo(2, 6);

        l = Line.mediatrix(new Vector(-1, 1), new Vector(1, -1));
        expect(l).toBeInstanceOf(Line);
        expect(l.m).toBeCloseTo(1, 6);
        expect(l.a).toBeCloseTo(0, 6);
    });
});