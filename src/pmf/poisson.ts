import { factorial } from "../combination";
import { PMF } from "./pmf";

export class Poisson implements PMF {
    
    private readonly accumulative: number[] = [];

    constructor (private readonly l: number) {
        if (!Number.isInteger(l) || l < 0) {
            throw new Error('The number of experiments must be a positive integer');
        }
    }

    getAccumulated(x: number): number {
        x = Math.floor(x);
        if (isNaN(x)) {
            throw new Error('Number expected');
        }
        if (x < 0) {
            return 0;
        }
        if (this.accumulative.length > x) {
            return this.accumulative[x];
        }
        let i = this.accumulative.length;
        let acc = i > 0 ? this.accumulative[i - 1] : 0;
        do {
            acc += this.probability(i);
            this.accumulative.push(acc);
            i++;
        } while (i <= x);
        return this.accumulative[x];
    }

    getValue(): number {
        const rnd = Math.random();
        let i = 0;
        while (i < this.accumulative.length) {
            if (rnd < this.accumulative[i]) {
                return i;
            }
            i++;
        }
        let acc = i > 0 ? this.accumulative[i - 1] : 0;
        do {
            acc += this.probability(i);
            this.accumulative.push(acc);
            i++;
        } while (rnd > acc);
        return i - 1;
    }

    probability(x: number): number {
        if (!Number.isInteger(x) || x < 0) {
            throw new Error('The value must be a positive integer');
        }
        return (this.l ** x) * Math.exp(-this.l) / factorial(x);
    }
}