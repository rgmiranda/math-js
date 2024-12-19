# Linear Algebra

## Gauss-Jordan Algorithm

The `gaussJordan` function applies the [Gauss-Jordan algorithm ](https://en.wikipedia.org/wiki/Gaussian_elimination)
on an _n x m_ matrix represented with an array of array.

```js
const matrix = [
    [3, 2, 2, 0],
    [6, -1, -1, 0],
    [-1, 2, 1, 4]
];

const reduced = gaussJordan(matrix);
/**
 * [ 1, 0, 0, 0 ]
 * [ 0, 1, 0, 4 ]
 * [ 0, 0, 1, -4 ]
 */ 
```
