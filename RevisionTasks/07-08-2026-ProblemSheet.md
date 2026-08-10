# Revision Problem Sheet — 07-08-2026

Problems collected from the `AlgoPrep` folder. Solve every problem in both **TypeScript** and **Java**. For each solution, write the time and space complexity.

## 1. Array Basics

### 1.1 Sum of All Array Values - TS[Done], Java[]

Given an integer array `arr` of length `N`, calculate and return the sum of all elements.

```text
Input:  [10, 20, 30, 50]
Output: 110
```

Source: [`JS_P1_SumOfAllValues.ts`](../AlgoPrep/Algo-Array-Basics/Learning-phase/JS_P1_SumOfAllValues.ts)

### 1.2 Swap Two Numbers

Given two integer variables `a` and `b`, swap their values without losing either value.

```text
Input:  a = 10, b = 20
Output: a = 20, b = 10
```

First solve this using a temporary variable. Then try solving it without one.

Source: [`JS_P2_SwappingNumber.ts`](../AlgoPrep/Algo-Array-Basics/Learning-phase/JS_P2_SwappingNumber.ts)

### 1.3 Swap Two Numbers Inside a Function

Write a function that accepts two integer values and swaps them. Observe whether changing the function parameters changes the original variables outside the function.

Source: [`JS_P3_SwappingNumberByFunction.ts`](../AlgoPrep/Algo-Array-Basics/Learning-phase/JS_P3_SwappingNumberByFunction.ts)

### 1.4 Swap Two Array Elements Using a Function

Given an integer array, write a function that swaps the elements at index `0` and index `1`.

```text
Input:  [40, 50]
Output: [50, 40]
```

Source: [`JS_P4_SwappingArrElemByFunction.ts`](../AlgoPrep/Algo-Array-Basics/Learning-phase/JS_P4_SwappingArrElemByFunction.ts)

### 1.5 Swap Elements at Two Given Indices

Given an integer array and two valid indices `firstIndex` and `secondIndex`, swap the elements at those indices.

```text
Input:
arr = [11, 12, 13, 14, 15]
firstIndex = 1
secondIndex = 4

Output: [11, 15, 13, 14, 12]
```

Source: [`JS_P5_SwappingIndeces.ts`](../AlgoPrep/Algo-Array-Basics/Learning-phase/JS_P5_SwappingIndeces.ts)

### 1.6 Reverse an Array

Given an integer array, reverse it in place without using a second array.

```text
Input:  [10, 20, 30, 40, 50]
Output: [50, 40, 30, 20, 10]
```

Use the two-pointer technique.

Source: [`JS_P6_ArrayReverse.ts`](../AlgoPrep/Algo-Array-Basics/Learning-phase/JS_P6_ArrayReverse.ts)

### 1.7 Reverse a Part of an Array

Given an integer array and two indices `start` and `end`, reverse only the elements between those indices, inclusive. Keep all other elements unchanged.

```text
Input:
arr = [10, 20, 30, 40, 50, 60, 70]
start = 2
end = 5

Output: [10, 20, 60, 50, 40, 30, 70]
```

Source: [`JS_P7_ArrayRevByGivenPart.ts`](../AlgoPrep/Algo-Array-Basics/Learning-phase/JS_P7_ArrayRevByGivenPart.ts)

### 1.8 Rotate an Array to the Right

Given an integer array and an integer `K`, rotate the array to the right by `K` positions. If `K` is greater than the array length, use `K % N`.

```text
Input:
arr = [10, 20, 30, 40, 50, 60]
K = 2

Output: [50, 60, 10, 20, 30, 40]
```

Solve this using the reversal algorithm. Also try the repeated `pop()` and `unshift()` approach.

Source: [`JS_P8_ArrayRotate.ts`](../AlgoPrep/Algo-Array-Basics/Learning-phase/JS_P8_ArrayRotate.ts)

### 1.9 Rotate an Array to the Left

Given an integer array and an integer `K`, rotate the array to the left by `K` positions.

```text
Input:
arr = [1, 2, 3, 4, 5]
K = 2

Output: [3, 4, 5, 1, 2]
```

Source: [`JS_P10_ArrayRotateAntiClock.ts`](../AlgoPrep/Algo-Array-Basics/Learning-phase/JS_P10_ArrayRotateAntiClock.ts)

### 1.10 Two Sum Using Brute Force

Given an integer array `arr` and an integer `target`, determine whether two different elements have a sum equal to `target`.

```text
Input:
arr = [2, -1, 0, 3, 2, 5, 7]
target = 8

Output: true
```

Return `true` when a pair exists; otherwise return `false`. Use two nested loops.

Source: [`JS_P11_ArrayTwoSumBrute.ts`](../AlgoPrep/Algo-Array-Basics/Learning-phase/JS_P11_ArrayTwoSumBrute.ts)

### 1.11 Count Elements Having a Greater Element

Given an integer array, count how many elements have at least one element greater than themselves in the same array.

```text
Input:  [-4, -3, 7, 9, 7, 8, 9, -1, 11, 0]
Output: 9
```

The maximum element does not have a greater element, so all other elements are counted.

Source: [`JS_P9_ArrayMinValueOccurance.ts`](../AlgoPrep/Algo-Array-Basics/Learning-phase/JS_P9_ArrayMinValueOccurance.ts)

### 1.12 Reverse Words and Selected Words

Given a sentence containing words separated by spaces:

1. Reverse the order of all words.
2. Reverse the characters of every word at an odd zero-based index in the original word array.

```text
Input:  "Today is a good day"
Output: "day doog a si Today"
```

The filename mentions `EvenIndex`, but the current implementation processes indices `1, 3, 5, ...`, which are odd zero-based indices.

Source: [`JS_P1_ArrayRevereseWithEvenIndex.ts`](../AlgoPrep/Algo-Array-Basics/NewProblem-Phase/JS_P1_ArrayRevereseWithEvenIndex.ts)

## 2. String Basics

### 2.1 Access Characters and Extract a Substring

Given a string, print the character at a specified index and extract a substring between two positions.

```text
Input:  "Algoprep"
Output:
Character at index 0: A
Substring from index 0 to 3: Algo
```

Source: [`JS_P1_StringBasics.ts`](../AlgoPrep/Algo-String-Basics/JS_P1_StringBasics.ts)

### 2.2 Toggle the Case of Every Character

Given a string containing alphabetic characters, convert every lowercase character to uppercase and every uppercase character to lowercase.

```text
Input:  "AlgOpreP"
Output: "aLGoPREp"
```

Source: [`JS_P1_StringBasics.ts`](../AlgoPrep/Algo-String-Basics/JS_P1_StringBasics.ts)

### 2.3 Reverse a String

Given a string, return the string in reverse order.

```text
Input:  "AlgOpreP"
Output: "PerpOglA"
```

Implement this in two ways: by traversing from right to left, and by converting the string to a character array and using two pointers.

Source: [`JS_P2_StringReverse.ts`](../AlgoPrep/Algo-String-Basics/JS_P2_StringReverse.ts)

## 3. HashMap and Set Problems

### 3.1 Frequency of Query Values

Given an integer array `arr` and a list of query values, find the frequency of every query value in the array.

```text
Input:
arr = [2, 8, 6, 9, 8, 6, 8, 2, 11]
queries = [2, 8, 3, 5]

Output:
2
3
0
0
```

Use a HashMap to store frequencies.

Source: [`JS_P1_frequencyCalculation.ts`](../AlgoPrep/Algo-HashMap-Basics/JS_P1_frequencyCalculation.ts)

### 3.2 First Non-Repeating Element

Given an integer array, find the first element that appears exactly once. If no such element exists, return `-1`.

```text
Input:  [-1, 2, -1, 3, 2]
Output: 3
```

First count frequencies, then scan the original array from left to right.

Source: [`JS_P2_nonRepeating.ts`](../AlgoPrep/Algo-HashMap-Basics/JS_P2_nonRepeating.ts)

### 3.3 Count Distinct Elements

Given an integer array, count the number of unique values present in it.

```text
Input:  [10, 20, 20, 10, 30, 10]
Output: 3
```

Solve this using both a HashMap and a HashSet.

Source: [`JS_P3_distinctValue.ts`](../AlgoPrep/Algo-HashMap-Basics/JS_P3_distinctValue.ts)

### 3.4 Two Sum Using a HashMap

Given an array of positive integers and a target value `X`, determine whether two elements have a sum exactly equal to `X`. Return their indices if a pair exists.

```text
Input:
arr = [1, 4, 45, 6, 10, 8]
X = 16

Output: [3, 4]
```

Because `arr[3] + arr[4] = 6 + 10 = 16`. Use a HashMap to target $O(N)$ time complexity.

Source: [`JS_P4_twoSumOptimized.ts`](../AlgoPrep/Algo-HashMap-Basics/JS_P4_twoSumOptimized.ts)

## 4. Mathematical Problem Solving

### 4.1 Count and Print All Factors

Given a positive integer `N`, print all factors of `N` and count how many factors it has.

```text
Input:  24
Factors: 1, 2, 3, 4, 6, 8, 12, 24
Output: 8
```

A factor divides `N` without leaving a remainder.

Source: [`JS_P1_NumberOfFactors.ts`](../AlgoPrep/Algo-Problem-Solving/JS_P1_NumberOfFactors.ts)

### 4.2 Count Factors Efficiently

Given a positive integer `N`, count its factors using an optimized approach that checks values only up to $\\sqrt{N}$.

```text
Input:  36
Output: 9
```

Factors occur in pairs `i` and `N / i`. If `N` is a perfect square, count its square root only once.

Source: [`JS_P2_NumberOfFactors_Optimized.ts`](../AlgoPrep/Algo-Problem-Solving/JS_P2_NumberOfFactors_Optimized.ts)

### 4.3 Check Whether a Number Is Prime

Given a positive integer `N`, determine whether it is prime. A prime number has exactly two factors: `1` and itself.

```text
Input:  22
Output: Not Prime

Input:  23
Output: Prime
```

Use the optimized factor-counting approach.

Source: [`JS_P3_PrimeNumber_Optimized.ts`](../AlgoPrep/Algo-Problem-Solving/JS_P3_PrimeNumber_Optimized.ts)

### 4.4 Find the Integer Square Root

Given a non-negative integer `N`, find the greatest integer less than or equal to $\\sqrt{N}$. Do not use a built-in square-root function.

```text
Input:  63
Output: 7
```

Because $7^2 = 49$ and $8^2 = 64 > 63$.

Source: [`JS_P4_SqrtNumber_Optimized.ts`](../AlgoPrep/Algo-Problem-Solving/JS_P4_SqrtNumber_Optimized.ts)

## 5. Sorting and Ordering

### 5.1 Count Good Integers

Given an array of distinct integers, count the number of elements for which the number of smaller elements is equal to the element itself.

An element `x` is good if:

$$
\\text{number of elements smaller than } x = x
$$

```text
Input:  [-1, -4, 3, 5, -15, 4]
Output: Determine by counting smaller elements for every value.
```

Solve this first with nested loops. Then try solving it after sorting the array.

Source: [`JS_P1_goodInt.ts`](../AlgoPrep/Algo-sort-Basics/JS_P1_goodInt.ts)

## 6. Recursion

### 6.1 Reverse a String Recursively

Given a string, reverse it using recursion. Do not use a built-in reverse method.

```text
Input:  "Samiran"
Output: "narimaS"
```

Use two indices, `start` and `end`. Swap the characters and recursively process the inner portion.

Source: [`JS_P1_reverseString.ts`](../AlgoPrep/Alog-Recursion-Basics/JS_P1_reverseString.ts)

### 6.2 Generate Fibonacci Numbers Iteratively

Given an integer `N`, generate the first `N` numbers of the Fibonacci sequence. The sequence starts with `0, 1`.

```text
Input:  8
Output: [0, 1, 1, 2, 3, 5, 8, 13]
```

Solve this using a loop and an array.

Source: [`JS_P2_fibonacci.ts`](../AlgoPrep/Alog-Recursion-Basics/JS_P2_fibonacci.ts)

### 6.3 Generate Fibonacci Numbers Recursively

Generate the first `N` Fibonacci numbers using recursion.

```text
Input:  8
Output: [0, 1, 1, 2, 3, 5, 8, 13]
```

Use the recurrence:

$$
F(n) = F(n-1) + F(n-2)
$$

with $F(0)=0$ and $F(1)=1$.

Source: [`JS_P2_fibonacci.ts`](../AlgoPrep/Alog-Recursion-Basics/JS_P2_fibonacci.ts)

## Explanatory Material

The following file contains notes rather than a separate coding problem:

- [`JS_P3_UnderstandingNotes.ts`](../AlgoPrep/Algo-Array-Basics/Learning-phase/JS_P3_UnderstandingNotes.ts)

Topics covered include the call stack, memory heap, primitive values, array references, function parameters, array mutation, and garbage collection.
