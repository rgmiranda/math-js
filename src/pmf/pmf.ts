export interface PMF {
    getAccumulated(x: number): number;
    getValue(): number;
    probability(x: number): number;
}