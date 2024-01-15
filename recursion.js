import LoopTypes from './loopTypes.js';

class Engine {
    constructor() {
        this.forData = [];
        this.recData = [];
        this.analysis = [];
        this.forConstructor = LoopTypes.ForLoop;
        this.recConstructor = LoopTypes.RecursiveCalls;
    }
    callFor(n) {
        this.forLoop = new this.forConstructor(n);
        let next_value = this.forLoop.looping()
        this.forData.push({input:this.forLoop.n_times, duration:this.forLoop.getTime(), sum:this.forLoop.sum_value});
        while (next_value > 0) {
            let newLoop = new this.forConstructor(next_value);
            next_value = newLoop.looping();
            this.forData.push({input:newLoop.n_times, duration:newLoop.getTime(), sum:newLoop.sum_value});
        }

    }
    callRec(n) {
        this.recCall = new this.recConstructor(n);
        let next_value = this.recCall.looping();
        this.recData.push({input:this.recCall.n_times, duration:this.recCall.getTime(), sum:this.recCall.sum_value});
        while (next_value > 0) {
            let newLoop = new this.recConstructor(next_value);
            next_value = newLoop.looping();
            this.recData.push({input:newLoop.n_times, duration:newLoop.getTime(), sum:newLoop.sum_value});
        }
    };
    checkData() {
        this.recData.forEach((element, index, inputArray) => {
            this.forData.forEach((forElement, forIndex) => {
                if (element.input == forElement.input) {
                    this.analysis.push(`The recursive method was ${forElement.duration - element.duration}s faster at handling the input ${element.input}`);
                };
            });
        });
    };
};

export default Engine;

