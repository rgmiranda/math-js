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
    
    it('sets magnitude', () => {
        const v = new Vector(3, -4);
        expect(v.mag).toBe(5);
        v.mag = 10;
        expect(v.mag).toBe(10);
        expect(v.x).toBe(6);
        expect(v.y).toBe(-8);
    });
    
    it('calculates angle', () => {
        const v = new Vector(0, 1);
        expect(v.angle).toBe(Math.PI * 0.5);
        
        v.x = 1;
        expect(v.angle).toBe(Math.PI * 0.25);
        v.x = -1;
        expect(v.angle).toBe(Math.PI * 0.75);
        v.y = -1;
        expect(v.angle).toBe(Math.PI * -0.75);
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
    
    it('copies and multiplies a vector', () => {
        const v = new Vector(4, 3);
        const w = Vector.mult(v, 2);
        expect(v.mag).toBe(5);
        expect(w.mag).toBe(10);
    });
    
    it('divides a vector', () => {
        const v = new Vector(0, 12);
        v.div(4);
        expect(v.mag).toBe(3);
        expect(v.y).toBe(3);
        
        v.x = 5;
        v.y = 5;
        v.div(5);
        expect(v.mag).toBeCloseTo(Math.SQRT2, 6);
        expect(v.x).toBe(1);
        expect(v.y).toBe(1);
    });
    
    it('copies and divides a vector', () => {
        const v = new Vector(24, 10);
        const w = Vector.div(v, 2);
        expect(v.mag).toBe(26);
        expect(w.mag).toBe(13);
    });
    
    it('calculates the dot product', () => {
        const v = new Vector(-2, 3);
        const u = new Vector(2, 3);
        expect(v.dot(u)).toBe(5);
        expect(u.dot(v)).toBe(5);
        u.mult(4);
        expect(u.dot(v)).toBe(20);
        v.mult(0.5);
        expect(u.dot(v)).toBe(10);
    });
    
    it('adds a vector', () => {
        const v = new Vector(-2, 3);
        v.add(new Vector(3, -5));
        expect(v.x).toBe(1);
        expect(v.y).toBe(-2);
    });
    
    it('copies and adds a vector', () => {
        const v = new Vector(3, 4);
        const w = Vector.add(v, new Vector(9, 1));
        expect(v.mag).toBe(5);
        expect(w.mag).toBe(13);
    });
    
    it('subs a vector', () => {
        const v = new Vector(-2, 3);
        v.sub(new Vector(3, -5));
        expect(v.x).toBe(-5);
        expect(v.y).toBe(8);
    });
    
    it('copies and subs a vector', () => {
        const v = new Vector(12, 5);
        const w = Vector.sub(v, new Vector(18, -3));
        expect(v.mag).toBe(13);
        expect(w.mag).toBe(10);
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
        
        v1.x = -1;
        expect(v1.angleTo(v2)).toBeCloseTo(Math.PI * 0.5, 6);
    });
    
    it('calculates projection on another vector', () => {
        const v1 = new Vector(3, 4);
        const v2 = new Vector(1, 2);
        let proj = v1.projection(v2);
        expect(proj.x).toBe(2.2);
        expect(proj.y).toBe(4.4);

        v1.x = -2;
        v1.y = 1;
        proj = v1.projection(v2);
        expect(proj.x).toBe(0);
        expect(proj.y).toBe(0);
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
    
    it('limits a vector magnitude', () => {
        const v = new Vector(8, -6);
        v.limit(5);
        expect(v.mag).toBe(5);
        expect(v.x).toBe(4);
        expect(v.y).toBe(-3);
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