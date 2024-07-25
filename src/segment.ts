import { Vector } from "./vector";

export class Segment {
    constructor (public readonly p: Vector, public readonly q: Vector) {
    }

    /**
     * 
     * @param { Vector } r 
     * @returns { boolean }
     */
    isOnSegment(r: Vector): boolean {
        return (this.q.x - this.p.x)*(r.y - this.p.y) === (this.q.y - this.p.y) * (r.x - this.p.x);
    }

    /**
     * To find orientation of ordered triplet (p, q, r).
     * The function returns following values
     * 0 when p, q and r are collinear; -1 when clockwise, 1 counterclockwise
     * 
     * @param { Vector } p 
     * @param { Vector } q 
     * @param { Vector } r 
     * @returns { number }
     */
    private getOrientation(p: Vector, q: Vector, r: Vector): number {

        // See https://www.geeksforgeeks.org/orientation-3-ordered-points/ 
        // for details of below formula. 
        let val = (q.y - p.y) * (r.x - q.x) -
            (q.x - p.x) * (r.y - q.y);

        if (val == 0) return 0; // collinear 

        return (val > 0) ? -1 : 1; // clock or counterclock wise 
    }

    
    /**
     * 
     * Returns true if intersects with this segment
     * 
     * @param { Segment } segment
     * @returns { boolean }
     */
   intersects(segment: Segment): boolean {

        // Find the four orientations needed for general and 
        // special cases 
        let o1 = this.getOrientation(this.p, this.q, segment.p);
        let o2 = this.getOrientation(this.p, this.q, segment.q);
        let o3 = this.getOrientation(segment.p, segment.q, this.p);
        let o4 = this.getOrientation(segment.p, segment.q, this.q);

        // General case 
        if (o1 != o2 && o3 != o4) {
            return true;
        }

        // Special Cases 
        // The first point of the segemnt lies on this segment 
        if (o1 == 0 && this.isOnSegment(segment.p)) {
            return true;
        }

        // The second point of the segemnt lies on this segment 
        if (o2 == 0 && this.isOnSegment(segment.q)) {
            return true;
        }

        // The first point of this segments lies on the other segment 
        if (o3 == 0 && segment.isOnSegment(this.p)) {
            return true;
        }

        // The second point of this segments lies on the other segment 
        if (o4 == 0 && segment.isOnSegment(this.q)) {
            return true;
        }

        return false; // Doesn't fall in any of the above cases 
    }
};