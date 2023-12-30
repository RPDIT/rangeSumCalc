class LoopMethod {
    constructor(n) {
        this.n_times = n;
        this.count = 0;
        this.for_data = [];
        this.rec_data = [];
    };
    looping() {
        this.start_time = performance.now();
        this.sum_value = this.transform(this.n_times);
        this.end = performance.now();
        console.log(this.the_output());
        return this.nextRandomNumber();
    };
    getTime() { 
        return this.end-this.start_time;
    };
    the_output() {
        return `The system received the input ${this.n_times} and took ${this.getTime()}s to find the sum ${this.sum_value} using ${this.r} ${this.count} times.`;
    };
    nextRandomNumber() {        
        return Math.floor(Math.random() * this.n_times);        
    };
    callCount() {
        this.count += 1;
    };
};


export default LoopMethod;