// 1. Create an array named numbers and store 5 number values in it
let numbers = [11,12,13,14,15];
console.log(numbers.length);
// 2. Calculate the sum of array items and print it to the console using console.log()
 let sum = 0;
 let average = 0;
 for(let i = 0; i < numbers.length; i++){
     sum += numbers[i];
     average = sum/numbers.length;
 }
 console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()
console.log(average);
// 4. Find the highest number in the array and print it to the console using console.log()
// 5. Find the lowest number in the array and print it to the console using console.log()

// 6. Find the even numbers in the array and print them to the console using console.log()
let even = [],
    odd =[];
    for(let number of numbers ){
        if(number % 2 === 0){
            even.push(number);
        } else {
            odd.push(number);
        }
    }
console.log(even);
// 7. Find the odd numbers in the array and print them to the console using console.log()
console.log(odd);

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let divisibleByFive  = [];
    for(let number of numbers ){
        if(number % 5 === 0){
            divisibleByFive.push(number);
        } 
    }
console.log(divisibleByFive);
// 9. Log all the element of the array one by one
for(let i = 0; i < numbers.length; i++){
    console.log(`${i} : ${numbers[i]}`);
}

// 10. Find all the number in the array that is divisible by 3
let divisibleByThree  = [];
    for(let number of numbers ){
        if(number % 3 === 0){
            divisibleByThree.push(number);
        } 
    }
console.log(divisibleByThree);
