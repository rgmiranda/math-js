import { describe, expect, it } from "vitest";
import { Segment, Vector } from "../src";

describe(Segment.name, () => {
    it('creates an instance', () => {
        const s = new Segment(new Vector(0, 0), new Vector(1, 1));
        expect(s).toBeInstanceOf(Segment);
    });
    
    it('detects a point on a segment', () => {
        const s = new Segment(new Vector(-1, 1), new Vector(1, -1));
        expect(s).toBeInstanceOf(Segment);

        expect(s.isOnSegment(new Vector(0, 0))).toBe(true);
        expect(s.isOnSegment(new Vector(0.5, 0))).toBe(false);
    });
    
    const segmentsIntersections = [
        [new Segment(new Vector(1, 1), new Vector(-1, -1)), new Segment(new Vector(-1, 1), new Vector(1, -1)), true],
        [new Segment(new Vector(1, 1), new Vector(-1, -1)), new Segment(new Vector(-1, 1), new Vector(0, 0)), true],
        [new Segment(new Vector(1, 1), new Vector(-1, -1)), new Segment(new Vector(-1, 1), new Vector(-1, 1)), true],
        [new Segment(new Vector(0, 1), new Vector(-1, 0)), new Segment(new Vector(0, 1), new Vector(1, 0)), true],
        [new Segment(new Vector(-1, 0), new Vector(0, 1)), new Segment(new Vector(0, 1), new Vector(1, 0)), true],
        [new Segment(new Vector(0, -1), new Vector(-1, 0)), new Segment(new Vector(0, -1), new Vector(1, 0)), true],
        [new Segment(new Vector(-1, 0), new Vector(0, -1)), new Segment(new Vector(0, -1), new Vector(1, 0)), true],
        [new Segment(new Vector(1, 1), new Vector(-1, -1)), new Segment(new Vector(-1, 1), new Vector(-0.5, 0.5)), false],
    ];
    it.each(segmentsIntersections)('detects if intersects another segment', (s1: any, s2: any, expected: any) => {
        expect(s1.intersects(s2)).toBe(expected);
    });
});