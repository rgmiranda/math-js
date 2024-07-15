export class Complex {
    private _mag?: number;

    constructor(private _a: number, private _b: number) {
        return this;
    }

    /**
     * 
     * @param { number | Complex} n 
     */
    add(n: number | Complex) {
        let { _a: a, _b: b } = this;
        if (typeof n === 'number') {
            a += n;
        } else if (n instanceof Complex) {
            a += n._a;
            b += n._b;
        }
        return new Complex(a, b);
    }

    
    /**
     * 
     * @param { number | Complex} n 
     */
    sub(n: number | Complex) {
        let { _a: a, _b: b } = this;
        if (typeof n === 'number') {
            a -= n;
        } else if (n instanceof Complex) {
            a -= n._a;
            b -= n._b;
        }
        return new Complex(a, b);
    }
    
    /**
     * 
     * @param { number | Complex} n 
        */
    mult(n: number | Complex) {
        let { _a: a, _b: b } = this;
        if (typeof n === 'number') {
            a *= n;
            b *= n;
        } else if (n instanceof Complex) {
            a = this._a * n._a - this._b * n._b;
            b = this._a * n._b + this._b * n._a;
        }
        return new Complex(a, b);
    }
    
    /**
     * 
     * @param { number | Complex} n 
     */
    div(n: number | Complex) {
        let { _a: a, _b: b } = this;
        
        if (typeof n === 'number') {
            a /= n;
            b /= n;
        } else if (n instanceof Complex) {
            const d = n._a * n._a + n._b * n._b;
            a = (this._a * n._a + this._b * n._b) / d;
            b = (this._b * n._a - this._a * n._b) / d;
        }
        return new Complex(a, b);
    }
    
    sqrt() {
        let { _a: a, _b: b } = this;
        const m = Math.sqrt(this.mag);
        const phi = Math.atan2(this._b, this._a) * 0.5;
        a = m * Math.cos(phi);
        b = m * Math.sin(phi);
        
        return new Complex(a, b);
    }
    
    /**
     * @returns { number }
     */
    get mag(): number {
        if (this._mag === undefined) {
            this._mag = Math.sqrt(this._a * this._a + this._b * this._b);
        }
        return this._mag;
    }
    
    /**
     * @returns { number }
     */
    get b(): number {
        return this._b;
    }
    
    /**
     * @returns { number }
     */
    get a(): number {
        return this._a;
    }
};