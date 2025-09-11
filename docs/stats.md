# Statistics

The `Stats` class has a collection of common statistic methods.

## Creation

### Constructor

```js
const stats = new Stats([1, 2, 3, 4, 5]);
```

Throws an error if the input is not a non-empty array of numbers.

## Properties

### Mean

```js
console.log(stats.mean); // 3
```

### Median

```js
console.log(stats.median); // 3
```

### Variance

```js
console.log(stats.variance); // 2
```

### Standard Deviation

```js
console.log(stats.stdDev); // Math.sqrt(2)
```

### Quartiles

```js
console.log(stats.q1); // 2
console.log(stats.q2); // 3
console.log(stats.q3); // 4
```

### Z-Scores

Returns an array of z-scores for the original data.

```js
console.log(stats.zScores); // [-1.414, -0.707, 0, 0.707, 1.414]
```

### Normalized Data

Returns an array of normalized values (min-max normalization).

```js
console.log(stats.normalized); // [0, 0.25, 0.5, 0.75, 1]
```

## Methods

### Percentile (Private)

Calculates the value at a given percentile (used internally for quartiles).

```js
// Not accessible directly; used for q1, q2, q3
```

## Example

```js
const stats = new Stats([10, 20, 30, 40, 50]);
console.log(stats.mean);        // 30
console.log(stats.median);      // 30
console.log(stats.variance);    // 200
console.log(stats.stdDev);      // 14.142...
console.log(stats.q1);          // 20
console.log(stats.q2);          // 30
console.log(stats.q3);          // 40
console.log(stats.zScores);     // [-1.414, -0.707, 0, 0.707, 1.414]
console.log(stats.normalized);  // [0, 0.25, 0.5,
```
