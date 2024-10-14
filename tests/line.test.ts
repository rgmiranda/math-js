import { describe, expect, it } from "vitest";
import { Line } from "../src/line";
import { Vector } from "../src";

describe(Line.name, () => {
    it('creates a new instance', () => {
        const l = new Line(1, 4);
        expect(l).toBeInstanceOf(Line);
    });

    const twoPointsData = [
        [ new Vector(1, 1), new Vector(2, 2), 1, 0 ],
        [ new Vector(0, 1), new Vector(-1, 2), -1, 1 ],
        [ new Vector(-1, 3), new Vector(1, 1), -1, 2 ],
        [ new Vector(-1, 1), new Vector(1, 1), -0, 1 ],
        [ new Vector(1, -1), new Vector(1, 1), NaN, 1 ],
    ];
    it.each(twoPointsData)('creates instance from two points', (v1: any, v2: any, m: any, a: any) => {
        let l: Line;
        l = Line.fromPoints(v1, v2);
        expect(l).toBeInstanceOf(Line);
        expect(l.m).toBe(m);
        expect(l.a).toBe(a);
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

    const intersectionPointsData = [
        [new Line(-1, 2),new Line(1, 0), 1, 1],
        [new Line(1, 1),new Line(NaN, 0), 0, 1],
        [new Line(1, 1),new Line(0, 1), 0, 1],
        [new Line(NaN, 0),new Line(1, 1), 0, 1],
    ];
    
    it.each(intersectionPointsData)('calculates the intersection point', (l1: any, l2: any, x, y) => {
        let p = l1.intersectionPoint(l2);
        expect(p.x).toBe(x);
        expect(p.y).toBe(y);
    });

    it('calculates the intersection point', () => {
        const l1 = new Line(-1, 2);
        const l2 = new Line(-1, 5);
        expect(() => l1.intersectionPoint(l2)).toThrowError('The slopes are equal');
    });
});