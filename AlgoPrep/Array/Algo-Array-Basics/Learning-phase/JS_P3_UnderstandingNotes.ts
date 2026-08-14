## JavaScript Memory Allocation Diagram
When you execute a function containing variables and arrays, the engine manages memory across the Call Stack and the Memory Heap.
Below is a visual text diagram representing exactly how memory is laid out during the execution of a function.

       CALL STACK (Fast, Fixed Size)               MEMORY HEAP (Dynamic, Flexible)
===========================================     ===========================================
                                               
  +-------------------------------------+      

  | FUNCTION FRAME: processData()       |      
  |                                     |      
  |  [score]  -->  |  100  |            |      
  |  (Primitive stored directly)        |      
  |                                     |       +-----------------------------------+
  |  [items]  -->  | 0x004F3A | -----------------> | Reference Address: 0x004F3A       |
  |  (Pointer address to Heap)          |       |                                   |
  |                                     |       | Array Data:                       |
  |                                     |       | [ 0: 'apple', 1: 'banana' ]       |
  +-------------------------------------+       +-----------------------------------+

  | GLOBAL EXECUTION CONTEXT            |      
  +-------------------------------------+      

------------------------------
## Step-by-Step Breakdown of the Diagram
Here is what happens chronologically when a function runs:

   1. Stack Frame Creation: When the function is invoked, a new execution box (frame) is pushed onto the top of the Call Stack.
   2. Primitive Variable (score): The primitive value 100 is saved directly inside that stack frame because its data size is fixed and known.
   3. Array Variable (items): The array elements require dynamic, resizable space. The JavaScript engine allocates space in the Memory Heap to hold ['apple', 'banana']. It then writes the unique memory address (e.g., 0x004F3A) back into the local variable slot on the Call Stack.
   4. Function Exit & Memory Cleanup:
   * As soon as the function returns, the entire processData() frame is instantly popped off and erased from the Call Stack.
      * The primitive variable score vanishes immediately.
      * The pointer 0x004F3A vanishes from the stack, leaving the array data sitting isolated on the heap.
      * During the next cycle, the automatic [MDN Web Docs Garbage Collection Process](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Memory_management) frees up that heap space because no variables hold its pointer anymore.
   
------------------------------
If you want to see how this changes under specific code patterns, let me know:

* Would you like to see how passing an array as an argument alters this diagram?
* Do you want to see how a closure prevents the heap memory from being cleared?
* Are you looking for ways to prevent memory leaks in your specific functions?





## Execution with Global Variables
When you pass a2 and b2 into the function, JavaScript passes them by value (copying the raw numbers). What happens inside the function stays inside the function. The external global variables a2 and b2 remain completely unchanged.
------------------------------
## Phase 1: Global Initialization
Before the function is called, the global execution context holds a2 and b2 on the Call Stack.

CALL STACK                                     MEMORY HEAP
===================================         ===================


|                                 |
|  GLOBAL CONTEXT:                |         ( Empty / Unused )
|  [a2]  -->  | 10 |              |
|  [b2]  -->  | 20 |              |
|                                 |
===================================

------------------------------
## Phase 2: Function Invocation (swapper(a2, b2))
When swapper is called, a new frame is pushed onto the stack. The values of a2 and b2 are copied into the function parameters a and b. They are entirely separate memory slots.

CALL STACK                                     MEMORY HEAP
===================================         ===================


|  FUNCTION FRAME: swapper()      |
|  [a]    -->   | 10 | (copy)     |         ( Empty / Unused )
|  [b]    -->   | 20 | (copy)     |
|  [swap] -->   |  0 |            |
| ------------------------------- |
|  GLOBAL CONTEXT:                |
|  [a2]   -->   | 10 | (original) |
|  [b2]   -->   | 20 | (original) |
|                                 |
===================================

------------------------------
## Phase 3: Swapping Inside the Function
The swapping logic mutates the local slots a, b, and swap. The global variables a2 and b2 at the bottom of the stack are untouched.

CALL STACK                                     MEMORY HEAP
===================================         ===================


|  FUNCTION FRAME: swapper()      |
|  [a]    -->   | 20 | (swapped)  |         ( Empty / Unused )
|  [b]    -->   | 10 | (swapped)  |
|  [swap] -->   | 10 |            |
| ------------------------------- |
|  GLOBAL CONTEXT:                |
|  [a2]   -->   | 10 | (untouched)|
|  [b2]   -->   | 20 | (untouched)|
|                                 |
===================================

The console prints: The value of a : 20 and The value of b : 10.
------------------------------
## Phase 4: Function Exits & Cleanup
The swapper() frame is popped off and destroyed. Only the global context remains, proving that the external a2 and b2 were never modified.

CALL STACK                                     MEMORY HEAP
===================================         ===================


|                                 |
|  GLOBAL CONTEXT:                |         ( Empty / Unused )
|  [a2]  -->  | 10 |              |
|  [b2]  -->  | 20 |              |
|                                 |
===================================

------------------------------
If you want to explore how to actually make a swap reflect outside the function, let me know:

* Do you want to see a diagram where we pass an Array or Object to mutate the values externally?
* Do you want to see how returning a Tuple [a, b] allows you to reassign them globally?
* Would you like to explore how block scoping (let vs var) applies here?





## Execution with an Array (Pass-by-Reference)
When you pass an array into a function, JavaScript passes the pointer address by value. Both the global variable and the function parameter point to the exact same memory location in the Heap. Any changes made inside the function will directly mutate the original array.
Here is the code context we are visualizing:

function arraySwapper(arr: number[]): void {
    let swap = arr[0];
    arr[0] = arr[1];
    arr[1] = swap;
}
let myArr =;
arraySwapper(myArr);

------------------------------
## Phase 1: Global Initialization
The array data is created in the Memory Heap. The global variable myArr on the Call Stack holds the memory address pointer (0xABC123).

CALL STACK                                     MEMORY HEAP
===================================         ===================================



|                                 |         +---------------------------------+
|  GLOBAL CONTEXT:                |         | Reference Address: 0xABC123     |
|  [myArr] --> | 0xABC123 | --------------> |                                 |
|                                 |         | Array Data: [ 0: 10,  1: 20 ]   |
|                                 |         +---------------------------------+
===================================

------------------------------
## Phase 2: Function Invocation (arraySwapper(myArr))
A new frame is pushed to the stack. The parameter arr copies the value of myArr, which is the pointer address 0xABC123. Both variables now look at the same heap data. swap grabs the primitive value 10 from arr[0].

CALL STACK                                     MEMORY HEAP
===================================         ===================================



|  FUNCTION FRAME: arraySwapper()  |
|  [arr]  --> | 0xABC123 | ---------------+ 
|  [swap] --> |    10    |                |
| ------------------------------- |       | +---------------------------------+
|  GLOBAL CONTEXT:                |       | | Reference Address: 0xABC123     |
|  [myArr] --> | 0xABC123 | --------------+>|                                 |
|                                 |         | Array Data: [ 0: 10,  1: 20 ]   |
|                                 |         +---------------------------------+
===================================

------------------------------
## Phase 3: Swapping Array Elements
The lines arr[0] = arr[1] and arr[1] = swap follow the pointer to the heap and change the data directly inside the array structure.

CALL STACK                                     MEMORY HEAP
===================================         ===================================



|  FUNCTION FRAME: arraySwapper()  |
|  [arr]  --> | 0xABC123 | ---------------+ 
|  [swap] --> |    10    |                |
| ------------------------------- |       | +---------------------------------+
|  GLOBAL CONTEXT:                |       | | Reference Address: 0xABC123     |
|  [myArr] --> | 0xABC123 | --------------+>|                                 |
|                                 |         | Array Data: [ 0: 20,  1: 10 ]   |
|                                 |         +---------------------------------+
===================================         (Values in the Heap are now SWAPPED)

------------------------------
## Phase 4: Function Exits & Persistent Changes
The arraySwapper() frame is popped off the stack and destroyed. However, because the actual numbers were swapped in the Heap, the global variable myArr reflects the changes. myArr is now permanently [20, 10].

CALL STACK                                     MEMORY HEAP
===================================         ===================================



|                                 |         +---------------------------------+
|  GLOBAL CONTEXT:                |         | Reference Address: 0xABC123     |
|  [myArr] --> | 0xABC123 | --------------> |                                 |
|                                 |         | Array Data: [ 0: 20,  1: 10 ]   |
|                                 |         +---------------------------------+
===================================

------------------------------
To explore how to manipulate arrays safely without side effects, let me know:

* Do you want to see how to clone the array inside the function using the spread operator (...) to prevent mutating the original?
* Do you want to see how this works with Objects instead of arrays?
* Are you interested in how const vs let applies to array reference protection?


