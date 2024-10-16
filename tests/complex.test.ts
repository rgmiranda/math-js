import { describe, expect, it } from 'vitest';
import { Complex } from '../src';

describe(Complex.name, () => {
    it('creates a new complex instance', () => {
        const cpx = new Complex(0, 1);
        expect(cpx).toBeInstanceOf(Complex);
        expect(cpx.a).toBe(0);
        expect(cpx.b).toBe(1);
    });

    const magnitudes = [
        [1, 0, 1],
        [-1, 0, 1],
        [0, 1, 1],
        [0, -1, 1],
        [0, 0, 0],
        [1, -1, Math.SQRT2],
        [5, 12, 13],
    ];

    it.each(magnitudes)('calculates the magnitude correctly', (a, b, mag) => {
        const cpx = new Complex(a, b);
        expect(cpx.mag).toBeCloseTo(mag, 6);
    });

    it('calculates the conjugate', () => {
        const cpx = new Complex(8, 4);
        const conj = cpx.conjugate();
        expect(conj.a).toBe(cpx.a);
        expect(conj.b).toBe(-1 * cpx.b);
    });

    it('adds a real number', () => {
        let cpx = new Complex(8, 5);
        cpx = cpx.add(22);
        
        expect(cpx.a).toBe(30);
        expect(cpx.b).toBe(5);
    });

    it('adds a complex number', () => {
        let cpx1 = new Complex(8, 5);
        let cpx2 = new Complex(-5, -8);
        const cpx = cpx1.add(cpx2);
        
        expect(cpx.a).toBe(3);
        expect(cpx.b).toBe(-3);
    });

    it('subs a real number', () => {
        let cpx = new Complex(-7, 2);
        cpx = cpx.sub(-8);
        
        expect(cpx.a).toBe(1);
        expect(cpx.b).toBe(2);
    });

    it('subs a complex number', () => {
        let cpx1 = new Complex(8, 5);
        let cpx2 = new Complex(-5, -8);
        const cpx = cpx1.sub(cpx2);
        
        expect(cpx.a).toBe(13);
        expect(cpx.b).toBe(13);
    });

    it('multiplies by real number', () => {
        let cpx = new Complex(8, 5);
        cpx = cpx.mult(2);
        
        expect(cpx.a).toBe(16);
        expect(cpx.b).toBe(10);
    });

    it('multiplies by complex number', () => {
        let cpx1 = new Complex(2, 1);
        let cpx2 = new Complex(-1, -1);
        const cpx = cpx1.mult(cpx2);
        
        expect(cpx.a).toBe(-1);
        expect(cpx.b).toBe(-3);
    });

    it('divides by real number', () => {
        let cpx = new Complex(8, 5);
        cpx = cpx.div(2);
        
        expect(cpx.a).toBe(4);
        expect(cpx.b).toBe(2.5);
    });

    it('divides by complex number', () => {
        let cpx1 = new Complex(2, 1);
        let cpx2 = new Complex(-1, -1);
        let cpx = cpx1.div(cpx2);
        
        expect(cpx.a).toBe(-1.5);
        expect(cpx.b).toBe(0.5);

        cpx1 = new Complex(-2, -2);
        cpx2 = new Complex(-2, 0);
        cpx = cpx1.div(cpx2);
        
        expect(cpx.a).toBe(1);
        expect(cpx.b).toBe(1);
    });

    it('gets the square of a complex number', () => {
        let cpx = new Complex(4, 0);
        cpx = cpx.sqrt();
        
        expect(cpx.a).toBe(2);
        expect(cpx.b).toBe(0);
        
        cpx = new Complex(3, 4);
        cpx = cpx.sqrt();
        
        expect(cpx.mag).toBe(Math.sqrt(5));
    });

    const toStringData = [
        [1, 1, '1 + i'],
        [-1, 1, '-1 + i'],
        [1, -1, '1 - i'],
        [8, -4, '8 - 4i'],
        [8, 7, '8 + 7i'],
    ];
    it.each(toStringData)('converts to string', (a: any, b: any, str: any) => {
        let cpx = new Complex(a, b);
        expect(cpx.toString()).toBe(str);
    });

});