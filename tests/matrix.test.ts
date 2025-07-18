import { describe, expect, it } from 'vitest';
import { Matrix } from '../src';

describe(Matrix.name, () => {
  it('sets and gets elements', () => {
    const m = new Matrix(3, 3);
    m.set(-90, 0, 2);
    expect(m.get(0, 2)).toBe(-90);
  });

  it('initializes with values', () => {
    const m = new Matrix(2, 2, [
      [1, 2],
      [3, 4],
    ]);
    expect(m.get(0, 1)).toBe(2);
    expect(m.get(1, 1)).toBe(4);
  });

  it('fails on invalid indexes', () => {
    const m = new Matrix(2, 2);
    expect(() => m.get(2, 0)).toThrowError('Row index 2 out of bounds');
    expect(() => m.get(0, 2)).toThrowError('Column index 2 out of bounds');
    expect(() => m.set(1, 2, 0)).toThrowError('Row index 2 out of bounds');
    expect(() => m.set(1, 0, 2)).toThrowError('Column index 2 out of bounds');
  });

  it('fails on invalid initial values', () => {
    expect(() => new Matrix(2, 2, [])).toThrowError(
      'Initial values do not match matrix dimensions'
    );
  });

  it('fails on invalid row or col number', () => {
    expect(() => new Matrix(-2, 2)).toThrowError(
      'Matrix dimensions must be positive integers'
    );
    expect(() => new Matrix(2, -2)).toThrowError(
      'Matrix dimensions must be positive integers'
    );
  });

  it('retrieves the base matrix', () => {
    const m = new Matrix(2, 2, [
      [1, 2],
      [3, 4],
    ]);
    expect(m.data).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it('retrieves the base matrix', () => {
    const m = new Matrix(2, 2, [
      [1, 2],
      [3, 4],
    ]);
    expect(m.data).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it('iterates through the elements', () => {
    const m = new Matrix(3, 4, [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ]);
    let i = 0;
    for (const e of m) {
      i++;
    }
    expect(i).toBe(12);
    i = 0;
    for (const r of m.rows()) {
      i++;
    }
    expect(i).toBe(3);
    i = 0;
    for (const c of m.columns()) {
      i++;
    }
    expect(i).toBe(4);
    for (const e of m.entries()) {
      expect(e).toEqual({
        row: expect.any(Number),
        col: expect.any(Number),
        value: expect.any(Number),
      })
    }
  });
  
  it('reduces the matrix', () => {
    const m = new Matrix(3, 4, [
      [1, 0, 3, -1],
      [0, 6, 1, 0],
      [2, 12, 9, 1],
    ]);
    const r = m.reduce();

    for(const e of r.entries()) {
      if (e.row === e.col) {
        expect(e.value).toBe(1);
      } else if (e.col < 3) {
        expect(e.value).toBe(0);
      }
    }
  });
});
