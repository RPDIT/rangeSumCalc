# Javascript calculator to find the sum of all values in a given range

When given a number, the calculator will find the sum of all positive integers between the given number and zero. This calculator was created to demonstrate and explore the different methods available to reach an answer, and was expanded to provide performance metrics for comparision between each method.

This process is solved using two different methods: the first method is a for loop that adds each value within the range; the second method utilizes a function that calls itself recursively to calculate the sum.

## Analyzing the differences

After an initial proof of concept, I wanted to find the differences in performance between the two methods by timing the duration of each loop.

All of this was handled within a main function and while loop, initially, where I passed the different recursion methods to a class constructor for a basic loop object; but, I saw the power of utilizing inheritance within this experiement for each method.

## Class Expansion

Creating an isolated class for each of the loop types provided a level of information storage that allowed me to start comparing and easily trackng multiple instances of each object without needing to delaratively test it.

## Turning a Calculator into an API

After completing the development of the calculator, I decided to expand this tool into an API that can be accessed via the web.

## Usage

Add the max number you want to use as an input into the url, as shown below:

`http://localhost:9000/calc/35`

This will provide an output showing the values calculated and the time taken for each loop method. It will also provide the analsys of which method was faster on each input that was shared between the two.

`http://localhost:9000/calc/5/results`

This will respond with an array of results object, each object is structured with the input, sum, for loop duration, and recursion duration.

```
[{
"input": 5,
"sum": 15,
"forDur": 44,
"recDur": 38
}]
```

The conclusions route will return a conclusion on which method, on average, completed each sum the fastest.

`http://localhost:9000/calc/35/conclusions`

It will respond with a string
`The Recursive method was 4ms faster on average.`

## Markdown Rendering

Utilizing markdown-it and fs, I am able to return my github's readme.md rendered as HTML when you try to reach this API's "/" route.
