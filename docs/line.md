# Line

The `Line` class represents a line in a 2D space with the form `a * x + b * y + c = 0`.

## Creation

### Constructor

```js
const l = new Line(a, b, c);
```

### From Points

Calculates the line that passes through two points

```js
const p = new Vector(x0, y0);
const q = new Vector(x1, y1);
const l = Line.fromPoints(p, q);
```

### Mediatrix

Calculates the mediatrix line from two vectors.

```js
const p = new Vector(x0, y0);
const q = new Vector(x1, y1);
const l = Line.mediatrix(p, q);
```

## Properties

### Slope

```js
const l1 = new Line(-1, 1, 0);
l1.slope; // 1
const l2 = new Line(2, 0, 1);
l2.slope; // NaN
```

### Y-Intercept

```js
const l = new Line(-1, 1, 1);
l.yIntercept; // -1
```

### Y-Intercept Point

```js
const l = new Line(-1, 1, 1);
l.yInterceptPoint; // Vector { x: 0, y: -1}
```

### X-Intercept

```js
const l = new Line(-1, 1, 1);
l.xIntercept; // 1
```

### X-Intercept Point

```js
const l = new Line(-1, 1, 1);
l.xInterceptPoint; // Vector { x: 0, y: 1}
```

## Methods

### Intersection Point

Calculates the intersection point between two lines. If the lines are parallel, it throws an error.

```js
const l1 = new Line(1, 0, -1);
const l2 = new Line(1, -1, 0);
l1.intersectionPoint(l2); // Vector { x: 1, y: 1}
```


```js
const l1 = new Line(1, -1, 3);
const l2 = new Line(2, -2, 6);
l1.intersectionPoint(l2); // Throws error
```

### Contains Point

Determines if a point lays on a line.

```js
const l = new Line(1, -1, 0);
const p = new Vector(2, 2);
const q= new Vector(2, 1);
l.containsPoint(p); // true
l.containsPoint(q); // false
```
