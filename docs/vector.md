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

## Substraction

```js
const v = new Vector(-2, 3);
v.sub(new Vector(3, -5));
console.log(v.x); // -5
console.log(v.y); // 8
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