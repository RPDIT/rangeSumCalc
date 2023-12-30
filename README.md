# Javascript calculator to find the sum of all values in a given range

When given a number, the calculator will find the sum of all positive integers between the given number and zero. This calculator was created to demonstrate and explore the different methods available to reach an answer, and was expanded to provide performance metrics for comparision between each method.

This process is solved using two different methods: the first method is a for loop that adds each value within the range; the second method utilizes a function that calls itself recursively to calculate the sum. 

## Anallyzing the differences

After an initial proof of concept, I wanted to find the differences in performance between the two methods by timing the duration of each loop. 

All of this was handled within a main function and while loop, initially, where I passed the different recursion methods to a class constructor for a basic loop object; but, I saw the power of utilizing inheritance within this experiement for each method.

## Class Expansion

Creating an isolated class for each of the loop types provided a level of information storage that allowed me to start comparing and easily trackng multiple instances of each object without needing to delaratively test it. 