# Probability Functions

## Probability Mass Functions

The probability mass functions (**PMF**) are used for discrete probability
distribution. The `PMF` interface defines three functions:

```ts
export interface PMF {
    getAccumulated(x: number): number;
    getValue(): number;
    probability(x: number): number;
}
```

- `getAccumulated` gets the accumulated value up to an argument.
- `getValue` generates a random value for the given PMF.
- `probability` gets the probability of a given value.

There are three implementations:

1. [Binomial Distribution](https://en.wikipedia.org/wiki/Binomial_distribution  )
2. [Negative Binomial Distribution](https://en.wikipedia.org/wiki/Negative_binomial_distribution)
3. [Poisson Distribution](https://en.wikipedia.org/wiki/Poisson_distribution)

### Binomial

```js
const pmf = new Binomial(10, 0.5);
```

```txt
  Binomial n = 10; p = 0.5;
==================================================
  0  |   0.0010
  1  |  # 0.0098
  2  |  #### 0.0439
  3  |  ############ 0.1172
  4  |  ##################### 0.2051
  5  |  ######################### 0.2461
  6  |  ##################### 0.2051
  7  |  ############ 0.1172
  8  |  #### 0.0439
  9  |  # 0.0098
 10  |   0.0010
 ```

### Poisson

```js
const pmf = new Poisson(3);
```

```txt
  Poisson l = 3
==================================================
  0  |  ##### 0.0498
  1  |  ############### 0.1494
  2  |  ###################### 0.2240
  3  |  ###################### 0.2240
  4  |  ################# 0.1680
  5  |  ########## 0.1008
  6  |  ##### 0.0504
  7  |  ## 0.0216
  8  |  # 0.0081
  9  |   0.0027
 10  |   0.0008
```

### Negative Binomial

```js
const pmf = new NegativeBinomial(2, 0.5);
```

```txt
  NegativeBinomial r = 2; p = 0.5;
==================================================
  0  |  ############# 0.1250
  1  |  ################### 0.1875
  2  |  ################### 0.1875
  3  |  ################ 0.1563
  4  |  ############ 0.1172
  5  |  ######## 0.0820
  6  |  ##### 0.0547
  7  |  #### 0.0352
  8  |  ## 0.0220
  9  |  # 0.0134
 10  |  # 0.0081
```

## Probability Density Functions

The probability density functions (**PDF**) are used for continuous probability
distribution functions. The `PDF` interface defines three functions:

```ts
export interface PDF {
    getAccumulated(x: number): number,
    getMean(): number,
    getValue(): number,
}
```

- `getAccumulated` gets the accumulated value up to a point.
- `getMean` returns the mean value of the distribution.
- `getValue` generates a random value for the given distribution.

There are three another implementations of these distributions:

1. [Uniform Distribution](https://en.wikipedia.org/wiki/Continuous_uniform_distribution)
2. [Exponential Distribution](https://en.wikipedia.org/wiki/Exponential_distribution)
3. [Normal or Gaussian Distribution](https://en.wikipedia.org/wiki/Normal_distribution)

### Uniform

```js
const pdf = new Uniform(0, 10);
```

```txt
  Uniform min = 0; max = 10;
==================================================
  0  |   0.0000
  1  |  ########## 0.1000
  2  |  ########## 0.1000
  3  |  ########## 0.1000
  4  |  ########## 0.1000
  5  |  ########## 0.1000
  6  |  ########## 0.1000
  7  |  ########## 0.1000
  8  |  ########## 0.1000
  9  |  ########## 0.1000
 10  |  ########## 0.1000
 11  |   0.0000
```

### Exponential

```js
const pdf = new Exponential(4);
```

```txt
  Exponential mean = 4
==================================================
  1  |  ####################################### 0.3935
  2  |  ######################## 0.2387
  3  |  ############## 0.1447
  4  |  ######### 0.0878
  5  |  ##### 0.0533
  6  |  ### 0.0323
  7  |  ## 0.0196
  8  |  # 0.0119
  9  |  # 0.0072
 10  |   0.0044
```

### Gaussian

```js
const pdf = new Gaussian(5, 1);
```

```txt
  Gaussian m = 5; s = 1
==================================================
 0.50  |   0.0001
 1.00  |   0.0004
 1.50  |   0.0016
 2.00  |  # 0.0050
 2.50  |  # 0.0135
 3.00  |  ### 0.0306
 3.50  |  ###### 0.0591
 4.00  |  ########## 0.0968
 4.50  |  ############# 0.1344
 5.00  |  ################ 0.1585
 5.50  |  ################ 0.1585
 6.00  |  ############# 0.1344
 6.50  |  ########## 0.0968
 7.00  |  ###### 0.0591
 7.50  |  ### 0.0306
 8.00  |  # 0.0135
 8.50  |  # 0.0050
 9.00  |   0.0016
 9.50  |   0.0004
10.00  |   0.0001
```
