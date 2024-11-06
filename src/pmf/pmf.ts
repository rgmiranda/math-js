export interface PMF {
    getValue(): number;
    probability(x: number): number;
}