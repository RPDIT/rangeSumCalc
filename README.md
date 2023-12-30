# Javascript calculator to find the sum of all values in a given range

When given a number, the calculator will find the sum of all positive integers between the given number and zero. This calculator was created to demonstrate and explore the different methods available to reach an answer, and was expanded to provide performance metrics for comparision between each method.

This process is solved using two different methods: the first method is a for loop that adds each value within the range; the second method utilizes a function that calls itself recursively to calculate the sum. 

## Analyzing the differences

After an initial proof of concept, I wanted to find the differences in performance between the two methods by timing the duration of each loop. 

All of this was handled within a main function and while loop, initially, where I passed the different recursion methods to a class constructor for a basic loop object; but, I saw the power of utilizing inheritance within this experiement for each method.

## Class Expansion

Creating an isolated class for each of the loop types provided a level of information storage that allowed me to start comparing and easily trackng multiple instances of each object without needing to delaratively test it. 

```
The system received the input 9999 and took 0.9961999952793121s to find the sum 49995000 using A For Loop 9999 times.
The system received the input 6906 and took 0.10429999232292175s to find the sum 23849871 using A For Loop 6906 times.
The system received the input 5524 and took 0.012400001287460327s to find the sum 15260050 using A For Loop 5524 times.
The system received the input 5313 and took 0.017399996519088745s to find the sum 14116641 using A For Loop 5313 times.
The system received the input 4865 and took 0.04330000281333923s to find the sum 11836545 using A For Loop 4865 times.
The system received the input 4744 and took 0.01629999279975891s to find the sum 11255140 using A For Loop 4744 times.
The system received the input 3037 and took 0.01199999451637268s to find the sum 4613203 using A For Loop 3037 times.
The system received the input 2586 and took 0.015699997544288635s to find the sum 3344991 using A For Loop 2586 times.
The system received the input 1761 and took 0.008299991488456726s to find the sum 1551441 using A For Loop 1761 times.
The system received the input 66 and took 0.031700000166893005s to find the sum 2211 using A For Loop 66 times.
The system received the input 52 and took 0.002500012516975403s to find the sum 1378 using A For Loop 52 times.
The system received the input 12 and took 0.0065000057220458984s to find the sum 78 using A For Loop 12 times.
The system received the input 8 and took 0.0025999993085861206s to find the sum 36 using A For Loop 8 times.
The system received the input 4 and took 0.025199994444847107s to find the sum 10 using A For Loop 4 times.
The system received the input 9999 and took 1.7673999965190887s to find the sum 49995000 using Recursive Calls 10000 times.
The system received the input 1577 and took 0.08789999783039093s to find the sum 1244253 using Recursive Calls 1578 times.
The system received the input 596 and took 0.05230000615119934s to find the sum 177906 using Recursive Calls 597 times.
The system received the input 235 and took 0.033299997448921204s to find the sum 27730 using Recursive Calls 236 times.
The system received the input 49 and took 0.007399991154670715s to find the sum 1225 using Recursive Calls 50 times.
The system received the input 26 and took 0.003900006413459778s to find the sum 351 using Recursive Calls 27 times.
The system received the input 18 and took 0.005899995565414429s to find the sum 171 using Recursive Calls 19 times.
The system received the input 4 and took 0.0022999942302703857s to find the sum 10 using Recursive Calls 5 times.
[
  { input: 9999, duration: 0.9961999952793121 },
  { input: 6906, duration: 0.10429999232292175 },
  { input: 5524, duration: 0.012400001287460327 },
  { input: 5313, duration: 0.017399996519088745 },
  { input: 4865, duration: 0.04330000281333923 },
  { input: 4744, duration: 0.01629999279975891 },
  { input: 3037, duration: 0.01199999451637268 },
  { input: 2586, duration: 0.015699997544288635 },
  { input: 1761, duration: 0.008299991488456726 },
  { input: 66, duration: 0.031700000166893005 },
  { input: 52, duration: 0.002500012516975403 },
  { input: 12, duration: 0.0065000057220458984 },
  { input: 8, duration: 0.0025999993085861206 },
  { input: 4, duration: 0.025199994444847107 }
] [
  { input: 9999, duration: 1.7673999965190887 },
  { input: 1577, duration: 0.08789999783039093 },
  { input: 596, duration: 0.05230000615119934 },
  { input: 235, duration: 0.033299997448921204 },
  { input: 49, duration: 0.007399991154670715 },
  { input: 26, duration: 0.003900006413459778 },
  { input: 18, duration: 0.005899995565414429 },
  { input: 4, duration: 0.0022999942302703857 }
]
[
  'The recursive method was -0.7712000012397766s faster at handling the input 9999',
  'The recursive method was 0.02290000021457672s faster at handling the input 4'
]

```