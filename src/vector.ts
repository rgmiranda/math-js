export class Vector {
    private _x : number;
    private _y : number;
    private _mag? : number;
    private _angle? : number;

    /**
     * 
     * @param { number } x 
     * @param { number } y 
     */
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
        this.resetValues();
    }

    private resetValues() {
        this._mag = undefined;
        this._angle = undefined;
    }

    /**
     * @returns { number }
     */
    get mag(): number {
        if (this._mag === undefined) {
            this._mag = Math.sqrt(this._x * this._x + this._y * this._y);
        }
        return this._mag;
    }

    /**
     * @returns { number }
     */
    get angle(): number {
        if (this._angle === undefined) {
            if (this.mag > 0) {
                this._angle = Math.atan2(this._y, this._x);
            } else {
                this._angle = 0;
            }
        }
        return this._angle;
    }

    /**
     * @returns { number }
     */
    get x(): number {
        return this._x;
    }

    /**
     * @param { number } value
     */
    set x(value: number) {
        this._x = value;
        this.resetValues();
    }

    /**
     * @returns { number }
     */
    get y(): number {
        return this._y;
    }

    /**
     * @param { number } value
     */
    set y(value: number) {
        this._y = value;
        this.resetValues();
    }

    /**
     * 
     * @returns { Vector }
     */
    normalize(): Vector {
        if (this.mag === 0) {
            return this;
        }
        this._x /= this.mag;
        this._y /= this.mag;
        this.resetValues();
        return this;
    }

    /**
     * 
     * @param { number} num 
     * @returns { Vector }
     */
    mult(num: number): Vector {
        this._x *= num;
        this._y *= num;
        this.resetValues();
        return this;
    }

    /**
     * 
     * @param { number} num 
     * @returns { number }
     */
    dot(v: Vector): number {
        return this._x * v._x + this._y * v._y;
    }

    /**
     * 
     * @param { Vector } vector 
     * @returns { Vector }
     */
    add(vector: Vector): Vector {
        this._x += vector._x;
        this._y += vector._y;
        this.resetValues();
        return this;
    }

    /**
     * 
     * @param { Vector } vector 
     * @returns { Vector }
     */
    sub(vector: Vector): Vector {
        this._x -= vector._x;
        this._y -= vector._y;
        this.resetValues();
        return this;
    }

    /**
     * 
     * @param { Vector } vector 
     * @returns { number }
     */
    dist(vector: Vector): number {
        const dx = this._x - vector._x;
        const dy = this._y - vector._y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     * 
     * @param { Vector } vector 
     * @returns { boolean }
     */
    equals(vector: Vector): boolean {
        return vector.x === this._x && vector.y === this.y;
    }

    /**
     * 
     * @param { Vector } vector 
     * @returns { number }
     */
    angleTo(vector: Vector): number {
        const cp = this.dot(vector);
        if (this.mag === 0 || vector.mag === 0) {
            return NaN;
        }
        return Math.acos(cp / (this.mag * vector.mag));
    }

    /**
     * Calculates the projection on another vector
     * @param { Vector } vector 
     * @returns { Vector }
     */
    projection(vector: Vector): Vector {
        const cp = this.dot(vector);
        const sqrtMag = vector.dot(vector);
        const proj = vector.copy();
        proj.mult(cp / sqrtMag);
        return proj;
    }

    /**
     * @returns { Vector }
     */
    copy(): Vector {
        return new Vector(this._x, this._y);
    }

    transpose() {
        const aux = this._y;
        this._y = this._x;
        this._x = aux;
        this.resetValues();
    }

    /**
     * 
     * @param { number } angle 
     * @returns { Vector }
     */
    static fromAngle(angle: number): Vector {
        const instance = new Vector(Math.cos(angle), Math.sin(angle));
        instance._angle = angle;
        return instance;
    }
}
