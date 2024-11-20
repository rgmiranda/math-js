import { PDF } from "./pdf";

export class Uniform implements PDF {

    constructor(public readonly min: number, public readonly max: number) {
        if (min > max) {
            throw new Error('Min cannot be greater than max');
        }
    }

    getMean(): number {
        return (this.max + this.min) * 0.5;
    }

    getValue(): number {
        return Math.random() * (this.max - this.min) + this.min;
    }

}
