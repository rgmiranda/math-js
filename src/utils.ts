import { Vector } from "./vector";

/**
 * Generates an array of numbers from a `start` (inclusively) to an `end`
 * (exclusively), using a `step`
 * 
 * @param { number } start 
 * @param { number } end 
 * @param { number } step 
 * @returns { number[] }
 */
export function range(start: number, end: number, step: number = 1): number[] {
  if (start === end) {
    throw new Error("Invalid range");
  }

  if (start < end && step <= 0) {
    throw new Error("Invalid range");
  }

  if (start > end && step >= 0) {
    throw new Error("Invalid range");
  }

  const a = [];
  if (step > 0) {
    for (let i = start; i < end; i += step) {
      a.push(i);
    }
  } else {
    for (let i = start; i > end; i += step) {
      a.push(i);
    }
  }
  return a;
}

/**
 * To find orientation of ordered triplet (p, q, r).
 * The function returns following values
 * 0 when p, q and r are collinear; -1 when clockwise, 1 counterclockwise
 *
 * @param { Vector } p
 * @param { Vector } q
 * @param { Vector } r
 * @returns { number }
 */
export function getOrientation(p: Vector, q: Vector, r: Vector): number {
  // See https://www.geeksforgeeks.org/orientation-3-ordered-points/
  // for details of below formula.
  let val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);

  if (val == 0) return 0; // collinear

  return val > 0 ? -1 : 1; // clock or counterclock wise
}
