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
        this.forData.push({input:this.forLoop.n_times, duration:this.forLoop.getTime()});
        while (next_value > 0) {
            let newLoop = new this.forConstructor(next_value);
            next_value = newLoop.looping();
            this.forData.push({input:newLoop.n_times, duration:newLoop.getTime()});
        }

    }
    callRec(n) {
        this.recCall = new this.recConstructor(n);
        let next_value = this.recCall.looping();
        this.recData.push({input:this.recCall.n_times, duration:this.recCall.getTime()});
        while (next_value > 0) {
            let newLoop = new this.recConstructor(next_value);
            next_value = newLoop.looping();
            this.recData.push({input:newLoop.n_times, duration:newLoop.getTime()});
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

function main(x, y) {
    let engine = new Engine()
    let value1 = engine.callFor(x);
    let value2 = engine.callRec(y);
    engine.checkData()
    console.log(engine.forData, engine.recData);
    console.log(engine.analysis);
};

main(9999,999);

export default Engine;

