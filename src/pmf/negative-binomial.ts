import { combination } from "../combination";
import { PMF } from "./pmf";

export class NegativeBinomial implements PMF {
    
    private readonly accumulative: number[] = [];

    constructor (private readonly r: number, private readonly p: number) {
        if (!Number.isInteger(r) || r < 1) {
            throw new Error('The number of experiments must be a positive integer');
        }

        if (!(p >= 0 && p <= 1)) {
            throw new Error('The success probability must be between 0 and 1');
        }
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
        return combination(this.r + x - 1, x) * (this.p ** this.r) * ((1 - this.p) ** x);
    }
}