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
