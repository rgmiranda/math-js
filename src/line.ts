import { Vector } from "./vector";

export class Line {

    constructor(public readonly m: number, public readonly a: number) {
    }

    static fromPoints(p: Vector, q: Vector): Line {
        const m = p.x === q.x ? NaN : ((p.y - q.y)/(p.x - q.x));
        const a = isNaN(m) ? p.x : -1 * m * p.x + p.y;
        return new Line(m, a);
    }

    static mediatrix(p: Vector, q: Vector): Line {
        const a = q.copy();
        a.sub(p);
        a.mult(0.5);
        const b = Vector.fromAngle(a.angle + Math.PI * 0.5);

        a.add(p);
        b.add(a);

        return Line.fromPoints(a, b);
    }

    /**
     * Calculates a line intersection point with another
     * @param { Line } line 
     * @returns { Vector }
     */
    intersectionPoint(line: Line): Vector {

        let x, y;

        if (this.m === line.m) {
            throw new Error('The slopes are equal');
        }

        if (isNaN(this.m)) {
            x = this.a;
            y = line.m * x + line.a;
        } else if (isNaN(line.m)) {
            x = line.a;
            y = this.m * x + this.a;
        } else {
            x = (line.a - this.a) / (this.m - line.m);
            y = this.m * x + this.a;
        }

        return new Vector(x, y);
    }

}