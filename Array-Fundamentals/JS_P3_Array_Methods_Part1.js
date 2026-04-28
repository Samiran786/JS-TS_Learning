// To find the element by index
console.log("Concept 1: Print element by a index");
let marks = [12, 13, 14, 15, 89];
let marksElementByIndex = marks[3]; //15
console.log(`Element by Index : ${marksElementByIndex}`);
console.log("///////////////////////////////////////////");

// To push a data in the last index
console.log("Concept 2: Pushing the new element in existing array");
let pushExampleArray = [12, 13, 14, 15, 89];
console.log(`The new length of the array BEFORE push : ${pushExampleArray.length}`); 
let pushElementArrayLength = pushExampleArray.push(98); // this will push a new element in last index and return the length of new array
console.log('The new array AFTER push:',pushExampleArray);
console.log(`The new length of the array AFTER push : ${pushElementArrayLength}`);
console.log("///////////////////////////////////////////"); 

// To pop out a element from last index
console.log("Concept 3: Poping out a element from last index of an array");
let popExampleArray = [12, 13, 14, 15, 89];
console.log(`The new length of the array BEFORE push : ${popExampleArray.length}`); 
let popElement = popExampleArray.pop(); // this will pop out a element from last index and return the poped out element
console.log('The new array AFTER pop:',popExampleArray);
console.log(`The poped out element : ${popElement}`); 
console.log(`The new length of the array AFTER push : ${popExampleArray.length}`);
console.log("///////////////////////////////////////////"); 

// To insert an element in the 1st index
console.log("Concept 4: unshift - Inserting an element in the 1st index");
let unshiftExampleArray = [12, 13, 14, 15, 89];
console.log(`The new length of the array BEFORE push : ${unshiftExampleArray.length}`); 
let unshiftExampleArrayLength = unshiftExampleArray.unshift(100); // this will push a new element in first index and return the length
console.log('The new array AFTER pop:',unshiftExampleArray);
console.log(`The new length of the array AFTER push : ${unshiftExampleArrayLength}`);
console.log("///////////////////////////////////////////"); 

// to find a the index of the element
console.log("Concept 5: indexOf - Finding out the index of the element");
let indexExampleArray = [12, 13, 14, 15, 89];
let indexOfElement = indexExampleArray.indexOf(15); // 3
console.log('The index of the given element:',indexOfElement);
console.log("///////////////////////////////////////////"); 

// to check if perticular element present in a array or not
console.log("Concept 6: includes - Finding out if a element is present in an array or not");
let includeExampleArray = [12, 13, 14, 15, 89];
let statusOfInclude = includeExampleArray.includes(15,3); // true
console.log('The status of include example:',statusOfInclude);
console.log("///////////////////////////////////////////"); 