import { PDF } from "./pdf";

export class Uniform implements PDF {

    constructor(public readonly min: number, public readonly max: number) {
        if (min > max) {
            throw new Error('Min cannot be greater than max');
        }
    }
    getAccumulated(x: number): number {
        if (x < this.min) {
            return 0;
        }

        if (x > this.max) {
            return 1;
        }

        return (x- this.min) / (this.max - this.min);

    }

    getMean(): number {
        return (this.max + this.min) * 0.5;
    }

    getValue(): number {
        return Math.random() * (this.max - this.min) + this.min;
    }

}
