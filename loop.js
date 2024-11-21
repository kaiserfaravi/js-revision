// //Write a loop 1 to 200. Use break to exit the loop once you find 100.
// for(let i = 1;i<=200;i++){
//     if (i==100)
//     {
//         //console.log(i);
//         break;
//     }
// }

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

// let i=1;
// let sum = 0;
// while(i<=500){
//     sum +=i;
//     if(sum>=100){
//         break;
//     }
//     // console.log(sum);
//     i++;
// }

/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

// for(let i = 1;i<=40;i++){
//     if(i%2==0){
//     continue;
//     console.log(i);
// }
// console.log(i);
// }
// /*
// display odd number from 55 to 85 and skip the numbers divisible by 5.
// */
// for(let i =55;i<=85;i++){
//    if(i%2==0 || i%5==0) continue;
//     console.log(i);
// }


/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/
// let sum = 0
// for(let i =91;i<=129;i++){
    
//     if(i%2!=0){
//     sum+=i;
   
//     }
    
// }
// console.log(sum);
let sum = 0;
for(let i =51;i<=85;i++){
    
    if(i%2==0){
        console.log(i);
    sum+=i;
   
    }
    
}
console.log(sum);