export class Complex {
    private _mag?: number;

    constructor(public readonly a: number, public readonly b: number) {
        return this;
    }

    /**
     * 
     * @param { number | Complex} n 
     */
    add(n: number | Complex): Complex {
        let { a, b } = this;
        if (typeof n === 'number') {
            a += n;
        } else if (n instanceof Complex) {
            a += n.a;
            b += n.b;
        }
        return new Complex(a, b);
    }

    
    /**
     * 
     * @param { number | Complex} n 
     */
    sub(n: number | Complex): Complex {
        let { a, b } = this;
        if (typeof n === 'number') {
            a -= n;
        } else if (n instanceof Complex) {
            a -= n.a;
            b -= n.b;
        }
        return new Complex(a, b);
    }
    
    /**
     * 
     * @param { number | Complex} n 
        */
    mult(n: number | Complex): Complex {
        let { a, b } = this;
        if (typeof n === 'number') {
            a *= n;
            b *= n;
        } else if (n instanceof Complex) {
            a = this.a * n.a - this.b * n.b;
            b = this.a * n.b + this.b * n.a;
        }
        return new Complex(a, b);
    }
    
    /**
     * 
     * @param { number | Complex} n 
     */
    div(n: number | Complex): Complex {
        let { a, b } = this;
        
        if (typeof n === 'number') {
            a /= n;
            b /= n;
        } else if (n instanceof Complex) {
            const d = n.a * n.a + n.b * n.b;
            a = (this.a * n.a + this.b * n.b) / d;
            b = (this.b * n.a - this.a * n.b) / d;
        }
        return new Complex(a, b);
    }
    
    sqrt(): Complex {
        let { a, b } = this;
        const m = Math.sqrt(this.mag);
        const phi = Math.atan2(this.b, this.a) * 0.5;
        a = m * Math.cos(phi);
        b = m * Math.sin(phi);
        
        return new Complex(a, b);
    }

    conjugate(): Complex {
        return new Complex(this.a, -1 * this.b);
    }

    toString(): string {
        let str = '';
        if (this.a !== 0) {
            str += `${this.a}`
        }
        if (this.b > 0) {
            if (this.b === 1) {
                str += ` + i`
            } else {
                str += ` + ${this.b}i`
            }
        } else if (this.b < 0) {
            if (this.b === -1) {
                str += ` - i`
            } else {
                str += ` - ${Math.abs(this.b)}i`
            }
        }
        return str.trim();
    }
    
    /**
     * @returns { number }
     */
    get mag(): number {
        if (this._mag === undefined) {
            this._mag = Math.sqrt(this.a * this.a + this.b * this.b);
        }
        return this._mag;
    }
};