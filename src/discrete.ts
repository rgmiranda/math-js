import { combination, factorial } from "./combination";

/**
 * 
 * @param { number } n Total experiments
 * @param { number } p Success probability
 * @param { number } x (Optional) Value to evaluate
 */
export function binomial(n: number, p: number, x: number = NaN): number | number[] {

    if (!Number.isInteger(n) || n < 1) {
        throw new Error('The number of experiments must be a positive integer');
    }

    if (!(p >= 0 && p <= 1)) {
        throw new Error('The success probability must be between 0 and 1');
    }

    if (!isNaN(x)) {
        if (!Number.isInteger(x) || x < 0) {
            throw new Error('The value must be a positive integer');
        }
        if (x > n) {
            throw new Error('The value cannot ve larger than the experiments number');
        }
        return combination(n, x) * (p ** x) * (1 - p) ** (n - x);
    }

    return Array(n + 1).fill(0).map((_, i: number) => combination(n, i) * (p ** i) * (1 - p) ** (n - i));
}

/**
 * 
 * @param { number } l Average
 * @param { number } k Value to evaluate
 */
export function poisson(l: number, k: number): number | number[] {

    if (!Number.isInteger(l) || l < 0) {
        throw new Error('The number of experiments must be a positive integer');
    }

    if (!Number.isInteger(k) || k < 0) {
        throw new Error('The value must be a positive integer');
    }

    return (l ** k) * Math.exp(-l) / factorial(k);
}

/**
 * 
 * @param { number } r Successful experiments
 * @param { number } p Success probability
 * @param { number } x Value to evaluate
 */
export function negativeBinomial(r: number, p: number, x: number): number | number[] {

    if (!Number.isInteger(r) || r < 1) {
        throw new Error('The number of experiments must be a positive integer');
    }

    if (!(p >= 0 && p <= 1)) {
        throw new Error('The success probability must be between 0 and 1');
    }

    if (!Number.isInteger(x) || x < 0) {
        throw new Error('The value must be a positive integer');
    }
    
    return combination(r + x - 1, x) * (p ** r) * ((1 - p) ** x);
}
