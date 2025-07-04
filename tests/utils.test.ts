import { describe, expect, it } from "vitest";
import { range } from "../src";

describe(range.name, () => {
  const fromBaseData: {
    params: [number, number, number],
    expected: number[]
  }[] = [
    {
      params: [0, 5, 1],
      expected: [0, 1, 2, 3, 4]
    },
    {
      params: [5, 0, -1],
      expected: [5, 4, 3, 2, 1]
    },
    {
      params: [-5, 0, 1],
      expected: [-5, -4, -3, -2, -1]
    },
    {
      params: [3, -3, -1],
      expected: [3, 2, 1, 0, -1, -2]
    },
    {
      params: [3, -3, -2],
      expected: [3, 1, -1]
    },
    {
      params: [0, 5, 4],
      expected: [0, 4]
    },
    {
      params: [0, 5, 5],
      expected: [0]
    },
  ];

  it.each(fromBaseData)(
    "generates the range",
    ({params, expected}) => {
      const result = range(...params);
      expect(result).toEqual(expected);
    }
  );

  const invalidRanges: [number, number, number][] = [
    [0, 10, -1],
    [0, 0, 1],
    [10, -10, 1],
  ];

  it.each(invalidRanges)('fails on invalid range', (start, end, step) => {
    expect(() => range(start, end, step)).toThrowError("Invalid range");
  });
});
