export type ExtendPosition = 'right' | 'below';

export class Matrix {
  private readonly vectors: number[][];

  constructor(
    private readonly _rows: number,
    private readonly _cols: number,
    initialValues?: number[][]
  ) {
    if (
      !Number.isInteger(_rows) ||
      _rows <= 0 ||
      !Number.isInteger(_cols) ||
      _cols <= 0
    ) {
      throw new Error('Matrix dimensions must be positive integers');
    }

    if (initialValues) {
      if (
        initialValues.length !== _rows ||
        initialValues.some((r) => r.length !== _cols)
      ) {
        throw new Error('Initial values do not match matrix dimensions');
      }
      this.vectors = initialValues.map((row) => [...row]);
    } else {
      this.vectors = Array(_rows)
        .fill(0)
        .map(() => Array(_cols).fill(0));
    }
  }

  private validateIndexes(i: number, j: number): void {
    this.validateRowIndex(i);
    this.validateColumnIndex(j);
  }

  private validateRowIndex(i: number): void {
    if (i < 0 || i >= this._rows) {
      throw new Error(`Row index ${i} out of bounds`);
    }
  }

  private validateColumnIndex(j: number): void {
    if (j < 0 || j >= this._cols) {
      throw new Error(`Column index ${j} out of bounds`);
    }
  }

  get(i: number, j: number): number {
    this.validateIndexes(i, j);
    return this.vectors[i][j];
  }

  getRow(i: number): number[] {
    this.validateRowIndex(i);
    return this.vectors[i];
  }

  getColumn(j: number): number[] {
    this.validateColumnIndex(j);
    return this.vectors.map(r => r[j]);
  }

  set(value: number, i: number, j: number): void {
    this.validateIndexes(i, j);
    this.vectors[i][j] = value;
  }

  get data(): number[][] {
    return this.vectors.map((row) => [...row]);
  }

  reduce(): Matrix {
    const reduced: number[][] = this.data;

    const matrixSize = Math.min(this._rows, this._cols - 1);

    for (let j = 0; j < matrixSize; j++) {
      if (reduced[j][j] === 0) {
        let i = j + 1;
        let found = false;
        while (!found && i < this._rows) {
          if (reduced[i][j] !== 0) {
            [reduced[j], reduced[i]] = [reduced[i], reduced[j]];
            found = true;
          }
          i++;
        }
        if (!found) {
          throw new Error(`No reductible value found on column ${j}`);
        }
      }

      for (let i = j + 1; i < this._rows; i++) {
        if (reduced[i][j] === 0) {
          continue;
        }
        const mult = -reduced[i][j] / reduced[j][j];
        for (let k = j; k < this._cols; k++) {
          reduced[i][k] += mult * reduced[j][k];
        }
      }
    }

    for (let i = matrixSize - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (reduced[j][i] === 0) {
          continue;
        }
        const mult = -reduced[j][i] / reduced[i][i];
        for (let k = i; k < this._cols; k++) {
          reduced[j][k] += mult * reduced[i][k];
        }
      }
      reduced[i][this._cols - 1] /= reduced[i][i];
      reduced[i][i] /= reduced[i][i];
    }
    return new Matrix(this._rows, this._cols, reduced);
  }

  extend(matrix: Matrix, direction: ExtendPosition): Matrix {
    if (direction === 'right') {
      if (this._rows !== matrix._rows) {
        throw new Error('Cannot extend to the right: row counts must match');
      }
      const result = new Matrix(this._rows, this._cols + matrix._cols);
      for (let i = 0; i < this._rows; i++) {
        for (let j = 0; j < this._cols; j++) {
          result.set(this.get(i, j), i, j);
        }
        for (let j = 0; j < matrix._cols; j++) {
          result.set(matrix.get(i, j), i, j + this._cols);
        }
      }
      return result;
    } else if (direction === 'below') {
      if (this._cols !== matrix._cols) {
        throw new Error('Cannot extend below: column counts must match');
      }
      const result = new Matrix(this._rows + matrix._rows, this._cols);
      for (let i = 0; i < this._rows; i++) {
        for (let j = 0; j < this._cols; j++) {
          result.set(this.get(i, j), i, j);
        }
      }
      for (let i = 0; i < matrix._rows; i++) {
        for (let j = 0; j < this._cols; j++) {
          result.set(matrix.get(i, j), i + this._rows, j);
        }
      }
      return result;
    } else {
      throw new Error(`Invalid direction: ${direction}`);
    }
  }

  extendRight(matrix: Matrix): Matrix {
    return this.extend(matrix, 'right');
  }

  extendBelow(matrix: Matrix): Matrix {
    return this.extend(matrix, 'below');
  }

  *[Symbol.iterator](): Generator<number> {
    for (const row of this.vectors) {
      for (const value of row) {
        yield value;
      }
    }
  }

  *rows(): Generator<number[]> {
    for (const row of this.vectors) {
      yield [...row];
    }
  }

  *columns(): Generator<number[]> {
    for (let col = 0; col < this._cols; col++) {
      const column: number[] = [];
      for (let row = 0; row < this._rows; row++) {
        column.push(this.vectors[row][col]);
      }
      yield column;
    }
  }

  *entries(): Generator<{ row: number; col: number; value: number }> {
    for (let i = 0; i < this._rows; i++) {
      for (let j = 0; j < this._cols; j++) {
        yield { row: i, col: j, value: this.vectors[i][j] };
      }
    }
  }
}
