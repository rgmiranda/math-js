import { Vector } from "./vector";

export class Line {
    private _m? : number;
    private _a : number;

    constructor(m: number | undefined, a: number) {
        this._m = m;
        this._a = a;
    }

    static fromPoints(p: Vector, q: Vector): Line {
        const m = p.x === q.x ? undefined : ((p.y - q.y)/(p.x - q.x));
        const a = m === undefined ? p.x : -1 * m * p.x + p.y;
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

    get m(): number | undefined {
        return this._m
    }

    get a(): number {
        return this._a
    }
}