import { describe, expect, it } from "vitest";
import { gaussJordan } from "../src";

describe(gaussJordan.name, () => {
    it('reduces a matrix', () => {
        const matrix = [
            [0.5, -1, 0.5, 0, 0, 0],
            [0, 0.5, -1, 0.5, 0, 0],
            [0, 0, 0.5, -1, 0.5, 0],
            [0.5, 0, 0, 0.5, -1, 0],
            [-1, 0.5, 0, 0, 0.5, 0],
            [1, 1, 1, 1, 1, 1]
        ];
        const expected = [
            [ 1, 0, 0, 0, 0, 0.2 ],
            [ 0, 1, 0, 0, 0, 0.2 ],
            [ 0, 0, 1, 0, 0, 0.2 ],
            [ 0, 0, 0, 1, 0, 0.2 ],
            [ 0, 0, 0, 0, 1, 0.2 ],
            [ 0, 0, 0, 0, 0, 0 ]
        ];
        const result = gaussJordan(matrix);
        expect(result).toStrictEqual(expected);
    });
    
    it('throws an error on empty matrix', () => {
        const matrix = [
            [],
            [0, 0.5, -1, 0.5, 0, 0],
            [0, 0, 0.5, -1, 0.5, 0],
            [0.5, 0, 0, 0.5, -1, 0],
            [-1, 0.5, 0, 0, 0.5, 0],
            [1, 1, 1, 1, 1, 1]
        ];
        expect(() => gaussJordan([])).toThrowError('Empty array received');
        expect(() => gaussJordan(matrix)).toThrowError('Empty array received');
    });
    
    it('throws an error on invalid matrix length', () => {
        const matrix = [
            [0.5, -1, 0.5, 0, 0, 0],
            [0, 0.5, -1, 0.5, 0, 0],
            [0, 0, 0.5, -1, 0.5, 0],
            [0.5, 0, 0, 0.5, -1],
            [-1, 0.5, 0, 0, 0.5, 0],
            [1, 1, 1, 1, 1, 1]
        ];
        expect(() => gaussJordan(matrix)).toThrowError('Row 3 not matching length');
    });
    
    it('throws an error zero column', () => {
        const matrix = [
            [0, -1, 0.5, 0, 0, 0],
            [0, 0.5, -1, 0.5, 0, 0],
            [0, 0, 0.5, -1, 0.5, 0],
            [0, 0, 0, 0.5, -1, 0],
            [0, 0.5, 0, 0, 0.5, 0],
            [0, 1, 1, 1, 1, 1]
        ];
        expect(() => gaussJordan(matrix)).toThrowError('No reductible value found on column 0');
    });
});