# math-js
Yet another JS math library

## Installation

```sh
npm install @rgsoft/math
```

## Tests

```sh
npm run test
```

## Complex Numbers

The complex number library has some methods for performing calculations on
complex numbers. To create a complex number of the form `a +  bi`:

```js
const cpx = new Complex(a, b);
```

---
> 📝 Every complex number is inmutable; both, the real and the imaginary
> parts are readonly.
---

### Magnitude

```js
const c = new Complex(5, 12);
console.log(c.mag); // 13
```

### Conjugate

```js
const c = new Complex(2, 7);
console.log(`${c.conjugate()}`); // 2 - 7i
```

### Addition

#### Scalar Addition

```js
// r + (a + bi) = (a + r) + bi
const c1 = new Complex(5, 12);
const c2 = c1.add(4);
console.log(`${c2}`); // 9 + 12i
```

#### Complex Addition

```js
// (a + bi) + (c + di) = (a + c) + (b + d)i
const c1 = new Complex(4, -8);
const c2 = new Complex(-3, 6);
const c3 = c1.add(c2);
console.log(`${c3}`); // 1 + 2i
```

### Substraction

#### Scalar Substraction

```js
// (a + bi) - r = (a - r) + bi
const c1 = new Complex(9, 1);
const c2 = c1.sub(10);
console.log(`${c2}`); // -1 + 1i
```

#### Complex Substraction

```js
// (a + bi) - (c + di) = (a - c) + (b - d)i
const c1 = new Complex(4, -8);
const c2 = new Complex(-3, 6);
const c3 = c1.add(c2);
console.log(`${c3}`); // 1 + 2i
```

### Multiplication

#### Scalar Multiplication

```js
// r (a + bi) = ra + bi
const c1 = new Complex(4, -1);
const c2 = c1.mult(-5);
console.log(`${c2}`); // -20 + 5i
```

#### Complex Multiplication

```js
// (a + bi) (c + di) = (ac - bd) + (ad + bc)i
const c1 = new Complex(3, -1);
const c2 = new Complex(-2, 1);
const c3 = c2.mult(c2);
console.log(`${c3}`); // -5 + 5i
```

### Division

#### Scalar Division

```js
// (a + bi) / r = a / r + (b / r)i
const c1 = new Complex(4, -1);
const c2 = c1.div(-2);
console.log(`${c2}`); // -2 + 0.5i
```

#### Complex Division

```js
let c1 = new Complex(2, 1);
let c2 = new Complex(-1, -1);
let c3 = c1.div(c2);
console.log(`${c3}`); // -1.5 + 0.5i
```

### Square Root

```js
let c = new Complex(4, 0);
c = c.sqrt();
console.log(`${c}`); // 2 + 0i
```

## Vectors

Instantiation:

```js
const vector = new Vector(x, y);
```

### Angle

```js
const v = new Vector(1, 1);
console.log(v.angle); // (Math.PI * 0.5);
```

### Magnitude

```js
const v = new Vector(1, 1);
console.log(v.mag); // (Math.SQRT2);
```

### Normalization

```js
const v = new Vector(4, 4);
v.nomalize();
console.log(v.mag); // 1;
```

### Scalar Multiplication

```js
const v = new Vector(0, 3);
v.mult(4);
console.log(v.mag); // 12;
console.log(v.y); // 12;
```

### Addition

```js
const v = new Vector(-2, 3);
v.add(new Vector(3, -5));
console.log(v.x); // 1
console.log(v.y); // -2
```

### Substraction

```js
const v = new Vector(-2, 3);
v.sub(new Vector(3, -5));
console.log(v.x); // -5
console.log(v.y); // 8
```

### Distance to Another Vector

```js
const v = new Vector(7, 2);
console.log(v.dist(new Vector(3, -1))); // 5
```

### Angle to Another Vector

```js
const v1 = new Vector(0, 1);
const v2 = new Vector(1, 0);
console.log(v1.angleTo(v2)); // Math.PI * 0.5
```

### Create Vector from Angle

```js
let v = Vector.fromAngle(Math.PI * 0.5);
console.log(v.x); //  0
console.log(v.y); //  1
```

### Equality with Other Vector

```js
const v1 = new Vector(7, 2);
const v2 = new Vector(7, 2);
console.log(v1.equals(v2)); // true
```

### Copy Vector

```js
const v = new Vector(7, 2);
const cv = v.copy();
```

## Modulo

The `mod` function calculates the modular remainder of a number `n` modulo `m`.
The main diference between this function and the remainder operator `%` is that
the `mod` function applies the modular arithmetic strictly. For example

```javascript
console.log(-1 % 4);
```

will output `-1`. Whereas using the `mod`:

```javascript
console.log(mod(-1, 4));
```

we should get `3`.

The `mod` function will fail if it receives a negative modulo or any non-integer
number.

## Greatest Common Divisor

The `gcd` function calculates greatest common divisor between to positive
integers

```javascript
console.log(gcd(18, 4));
```

will ouput `2`.

## Least Common Multiple

The `lcm` function calculates least common multple between to positive integers

```javascript
console.log(lcm(18, 4));
```

will ouput `36`.

## Is a Number Prime

The `prime` checks if a positive integer is prime or not

```javascript
console.log(prime(17));
```

will ouput `true`.

## Prime Factorization

The `factors` function gets the prime factors with their respective exponents

```javascript
console.log(factors(48));
```

will ouput `[ [2, 4], [3, 1] ]`, where each element of the array is another
array with two numbers:

1. The prime factor
2. The exponent of the factor

In the example, this means that `48` is `2^4 + 3^1`.

## Number Totient

The `totient` function gets the [totient](https://en.wikipedia.org/wiki/Euler%27s_totient_function)
from a positive integer, that is, the number of prime numbers from 1 to `n-1`
for a given integer `n`.

```javascript
console.log(totient(100));
```

will ouput `40`.

## Collatz Sequence

The `collatz` function gets the [collatz](https://en.wikipedia.org/wiki/Collatz_conjecture)
sequence from a positive integer.

```javascript
console.log(collatz(5));
```

will ouput `[ 5, 16, 8, 4, 2, 1 ]`.

Optionally, it accepts a second parameter that limits the maximum length of the
resulting sequence.

```javascript
console.log(collatz(5, 5));
```

will ouput `[ 5, 16, 8, 4, 2 ]`.

## Digital Roots

The `digitalRoots` function gets the digital roots from a positive integer, that
is, the sum of all its digits.

```javascript
console.log(digitalRoots(19));
```

will ouput `1`.

## Converting to Other Bases

The `toBase` function gets the string representation of a given **positive integer**
in a certain base.

```javascript
console.log(toBase(255, 16), toBase(255, 2));
```

will ouput `FF 11111111`.

The inverse process is achieved with the `fromBase` function.

```javascript
 console.log(fromBase('FF', 16), fromBase('11111111', 2));
```

outputs `255 255`.

## Combinations and Permutations

### Factorial

### Permutation

### Combination

## Probability Distribution Functions

### Discrete Distributions

#### Binomial

#### Poisson

#### Negative Binomial