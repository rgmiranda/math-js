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