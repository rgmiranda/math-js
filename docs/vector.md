# Vectors

Instantiation:

```js
const vector = new Vector(x, y);
```

## Angle

```js
const v = new Vector(1, 1);
console.log(v.angle); // (Math.PI * 0.5);
```

## Magnitude

```js
const v = new Vector(1, 1);
console.log(v.mag); // (Math.SQRT2);
```

## Normalization

```js
const v = new Vector(4, 4);
v.nomalize();
console.log(v.mag); // 1;
```

## Scalar Multiplication

```js
const v = new Vector(0, 3);
v.mult(4);
console.log(v.mag); // 12;
console.log(v.y); // 12;
```

### Static Multiplication

The static scalar multiplication creates a copy of the vector and returns this
new instance.


```js
const v = new Vector(0, 2);
const w = Vector.mult(v, 2);

console.log(v.mag); // 2;
console.log(v.y); // 2;

console.log(w.mag); // 4;
console.log(w.y); // 4;
```

## Scalar Division

```js
const v = new Vector(0, 4);
v.div(2);
console.log(v.mag); // 2;
console.log(v.y); // 2;
```

### Static Scalar Division

The static scalar division creates a copy of the vector and returns this new
instance.


```js
const v = new Vector(0, 4);
const w = Vector.div(v, 2);

console.log(v.mag); // 4;
console.log(v.y); // 4;

console.log(w.mag); // 2;
console.log(w.y); // 2;
```

## Dot Product

```js
const v = new Vector(2, 3);
const u = new Vector(-2, 3);
console.log(v.dot(u)); // 5;
```

## Addition

```js
const v = new Vector(-2, 3);
v.add(new Vector(3, -5));
console.log(v.x); // 1
console.log(v.y); // -2
```

### Static Addition

The static addition creates a copy of the vector and returns this new instance.

```js
const v = new Vector(0, 4);
const w = Vector.add(v, new Vector(3, 0));

console.log(v.mag); // 4;
console.log(v.y); // 4;

console.log(w.mag); // 5;
console.log(w.x); // 3;
console.log(w.y); // 4;
```

## Substraction

```js
const v = new Vector(-2, 3);
v.sub(new Vector(3, -5));
console.log(v.x); // -5
console.log(v.y); // 8
```

### Static Substraction

The static substraction creates a copy of the vector and returns this new
instance.

```js
const v = new Vector(0, 4);
const w = Vector.sub(v, new Vector(3, 0));

console.log(v.mag); // 4;
console.log(v.y); // 4;

console.log(w.mag); // 5;
console.log(w.x); // -3;
console.log(w.y); // 4;
```

## Distance to Another Vector

```js
const v = new Vector(7, 2);
console.log(v.dist(new Vector(3, -1))); // 5
```

## Angle to Another Vector

```js
const v1 = new Vector(0, 1);
const v2 = new Vector(1, 0);
console.log(v1.angleTo(v2)); // Math.PI * 0.5
```

## Projection on Another Vector

```js
const v1 = new Vector(3, 4);
const v2 = new Vector(1, 2);
let proj = v1.projection(v2);
console.log({x: proj.x, y: proj.y}); // { x: 2.2, y : 4.4 } 
```

## Create Vector from Angle

```js
let v = Vector.fromAngle(Math.PI * 0.5);
console.log(v.x); //  0
console.log(v.y); //  1
```

## Equality with Other Vector

```js
const v1 = new Vector(7, 2);
const v2 = new Vector(7, 2);
console.log(v1.equals(v2)); // true
```

## Copy Vector

```js
const v = new Vector(7, 2);
const cv = v.copy();
```