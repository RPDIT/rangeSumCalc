import LoopTypes from './loopTypes.js';
import Result from './result.js';

class Engine {
    constructor() {
        this.forData = [];
        this.recData = [];
        this.analysis = [];
        this.results = [];
        this.forConstructor = LoopTypes.ForLoop;
        this.recConstructor = LoopTypes.RecursiveCalls;
    }
    callLoop(n, loopContructor, dataArray) {
        let current_loop = new loopContructor(n);
        let next_value = current_loop.looping();
        dataArray.push({input:current_loop.n_times, duration:current_loop.getTime(), sum:current_loop.sum_value});
        while (next_value > 0) {
            let newLoop = new loopContructor(next_value);
            next_value = newLoop.looping();
            dataArray.push({input:newLoop.n_times, duration:newLoop.getTime(), sum:newLoop.sum_value});
        };
    };
    checkData() {
        this.recData.forEach((element, index, inputArray) => {
            this.forData.forEach((forElement, forIndex) => {
                if (element.input == forElement.input) {
                    let difference = Math.floor((forElement.duration - element.duration)*1000);
                    if (difference > 0){
                        this.analysis.push(`The recursive method was ${difference}ms faster at handling the input ${element.input}`);
                    } else {
                        this.analysis.push(`The For Loop method was ${Math.abs(difference)}ms faster at handling the input ${element.input}`);     
                    };
                    this.results.push(new Result(element.input, element.sum, forElement.duration, element.duration));
                };
            });
        });
    };
    conclusions() {
        let sum = this.results.reduce((accumulator, element) => 
            accumulator + (element.forDur-element.recDur), 0);
        let average = Math.floor(sum / this.results.length);
        if (average > 0) {
            return this.conclusion = `The Recursive method was ${average}ms faster on average.`;
        } else if(average == 0){
            return this.conclusion = 'The two methods were equal on average.';
        } else {
            return this.conclusion = `The For Loop was ${Math.abs(average)}ms faster on average.`;
        }
    }
};

export default Engine;

