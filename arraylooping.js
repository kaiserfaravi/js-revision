// // Task 1
// // Write a JavaScript code to reverse the array colors without using the reverse method.

// // Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// // Output:

// // ['orange', 'yellow', 'green', 'blue', 'red']

// // function reverse(arr){
// //     let reversed =[];
// //     for(let i = arr.length-1;i>=0;i--){
// //      reversed.push(arr[i])
        
// //     }
// //     console.log(reversed);
// //     return reversed
// // }
// // const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// // console.log(reverse(colors));

// // Write a JavaScript code to get the even numbers from an array using any looping technique.

// // Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// // Output:

// // [12, 98, 76, 46]
// // function evenNumbers(number){
// //     let evenNumber =[]
// //     for(let even of number){
// //         if(even %2==0){
// //             evenNumber.push(even)
// //         }
// //     }
// //     return evenNumber;
// // }
// // const numbers = [12, 98, 5, 41, 23, 78, 46];
// // console.log(evenNumbers(numbers));
// // Use a for...of loop to concatenate all the elements of an array into a single string.

// // Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// // Output:

// // 'TomTimTinTik'

// function concate(str){
//     let con = ''
//     for(let p of str){
//         con= con +p;

 
//    }
//    return con;
// }
// var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// console.log(concate(numbers));
// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

function positioning(str){
    let indexed = str.split(' ');
    // console.log(indexed.length);
    let pos ='';
    for(let i=indexed.length-1;i>=0;i-- ){

        
        pos=pos+indexed[i]
        // console.log(pos);
    }
    return pos;
}
const statement = 'I am a hard working person'
// console.log(positioning(statement));
function countVowels(str) {
    // const vowels = "aeiouAEIOU"; // সমস্ত স্বরবর্ণ
    let count = 0; // স্বরবর্ণের সংখ্যা ট্র্যাক করার জন্য কাউন্টার

    for (let char of str) {
        // স্বরবর্ণ চেক করার জন্য সরাসরি শর্ত
        if (
            char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
            char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'
        ) {
            count++; // যদি স্বরবর্ণ পাওয়া যায়, কাউন্ট বাড়াও
        }
    }

    return count;
}

// উদাহরণ ইনপুট
console.log(countVowels("Hello World")); // আউটপুট: 3
console.log(countVowels("Programming is fun!")); // আউটপুট: 6
console.log(countVowels("bcdfghjklmnpqrstvwxyz")); // আউটপুট: 0
