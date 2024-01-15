import LoopMethod from './loopMethod.js';

class RecursiveCalls extends LoopMethod {
    constructor(how_many){
        super(how_many)
        this.r = "Recursive Calls"
        this.transform = this.recSum
    }
    recSum(n) {
        this.callCount()
        if (n == 0) {
            return 0;
        } else {
            return ((this.recSum(n-1)) + n);
        };
    };
};

class ForLoop extends LoopMethod {
    constructor(how_many){
        super(how_many);
        this.r = "A For Loop";
        this.transform = this.sum
    }
    sum() {
        let accumulator = 0 
        for (let i=1; i<=this.n_times; i++){
            this.callCount()
            accumulator += i
        }
        return accumulator;
    };
};

export default {RecursiveCalls, ForLoop};