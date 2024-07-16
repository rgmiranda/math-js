import { describe, expect, it } from "vitest";
import { Vector } from "../src";

describe(Vector.name, () => {
    it('creates new instance', () => {
        const v = new Vector(0, 1);
        expect(v).toBeInstanceOf(Vector);
    });
    
    it('calculates magnitude', () => {
        const v = new Vector(0, 1);
        expect(v.mag).toBe(1);
        
        v.x = 1;
        expect(v.mag).toBe(Math.SQRT2);
    });
    
    it('calculates angle', () => {
        const v = new Vector(0, 1);
        expect(v.angle).toBe(Math.PI * 0.5);
        
        v.x = 1;
        expect(v.angle).toBe(Math.PI * 0.25);
    });
    
    it('calculates angle on vector zero', () => {
        const v = new Vector(0, 0);
        expect(v.angle).toBe(0);
    });
    
    it('normalizes vector', () => {
        const v = new Vector(0, 3);
        v.normalize();
        expect(v.mag).toBe(1);
        expect(v.y).toBe(1);
        
        v.x = 5;
        v.y = 5;
        v.normalize();
        expect(v.mag).toBeCloseTo(1, 6);
        expect(v.x).toBeCloseTo(Math.SQRT1_2, 6);
        expect(v.y).toBeCloseTo(Math.SQRT1_2, 6);
    });
    
    it('does not normalizes vector zero', () => {
        const v = new Vector(0, 0);
        v.normalize();
        expect(v.mag).toBe(0);
        expect(v.x).toBe(0);
        expect(v.y).toBe(0);
    });
    
    it('multiplies a vector', () => {
        const v = new Vector(0, 3);
        v.mult(4);
        expect(v.mag).toBe(12);
        expect(v.y).toBe(12);
        
        v.x = 5;
        v.y = 5;
        v.mult(2);
        expect(v.mag).toBeCloseTo(10 * Math.SQRT2, 6);
        expect(v.x).toBe(10);
        expect(v.y).toBe(10);
    });
    
    it('adds a vector', () => {
        const v = new Vector(-2, 3);
        v.add(new Vector(3, -5));
        expect(v.x).toBe(1);
        expect(v.y).toBe(-2);
    });
    
    it('subs a vector', () => {
        const v = new Vector(-2, 3);
        v.sub(new Vector(3, -5));
        expect(v.x).toBe(-5);
        expect(v.y).toBe(8);
    });
    
    it('calculates distance against another vector', () => {
        const v = new Vector(7, 2);
        const d = v.dist(new Vector(3, -1));
        expect(d).toBe(5);
    });
    
    it('verifies equality with another vector', () => {
        const v1 = new Vector(7, 2);
        const v2 = new Vector(7, 2);
        expect(v1.equals(v2)).toBeTruthy();
        
        v2.x = 9;
        expect(v1.equals(v2)).toBeFalsy();
    });
    
    it('calculates angle against another vector', () => {
        const v1 = new Vector(0, 1);
        const v2 = new Vector(1, 0);
        expect(v1.angleTo(v2)).toBeCloseTo(Math.PI * 0.5, 6);
        
        v2.y = 1;
        expect(v1.angleTo(v2)).toBeCloseTo(Math.PI * 0.25, 6);
    });
    
    it('copies a vector', () => {
        const v = new Vector(7, 2);
        const cv = v.copy();
        expect(v.equals(cv)).toBeTruthy();
        expect(cv).not.toBe(v);
    });
    
    it('trasposes a vector', () => {
        const v = new Vector(7, 2);
        v.transpose();
        expect(v.x).toBe(2);
        expect(v.y).toBe(7);
    });
    
    it('creates vector from angle', () => {
        let v = Vector.fromAngle(Math.PI * 0.5);
        expect(v.x).toBeCloseTo(0, 6);
        expect(v.y).toBeCloseTo(1, 6);

        v = Vector.fromAngle(Math.PI * 0.75);
        expect(v.x).toBeCloseTo(-Math.SQRT1_2, 6);
        expect(v.y).toBeCloseTo(Math.SQRT1_2, 6);
    });
});