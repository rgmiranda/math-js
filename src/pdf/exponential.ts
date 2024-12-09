import { PDF } from "./pdf";

export class Exponential implements PDF {

    private readonly m: number;

    constructor(private readonly mean: number) {
        this.m = 1 / mean;
    }

    getAccumulated(x: number): number {
        if (x < 0) {
            return 0;
        }
        return 1 - Math.exp(-this.m * x);
    }

    getValue(): number {
        const p = Math.random();
        if (p === 1) {
            return Infinity;
        }
        return -1 * Math.log(1 - p) * this.mean;
    }

    getMean(): number {
        return this.mean;
    }

}