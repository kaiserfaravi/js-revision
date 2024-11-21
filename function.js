//Task-1
// Take four parameters. Multiply the four numbers and then return the result

// let f= function mul(a,b,c,d)
// {
//     let res = a*b*c*d;
//     return res;
// }
// console.log(f(2,2,2,2));

//Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
// function test(number){
//     if(number%2!==0){
//         return number *2 ;
//     }
//     if(number%2==0){
//         return number /2;
//     }
// }
// console.log(test(7));
//Task-3
//Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// function make_avg(arrayInput){
// let sum = 0;
//     for(let i = 0;i<arrayInput.length;i++){
//         let arrayvalue = arrayInput[i];
//         sum+=arrayvalue;
        
        
//     }
//     let avg = sum / arrayInput.length;
//         console.log(avg);

// }
// let arr = make_avg([10,20,30,40,50]);
// console.log(make_avg(arr));

//Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// function count_zero(str){
//     let count = 0;
//     for(let i =0;i<str.length;i++){
//         if(str[i]=='0'){
//             count++;
//         }
//     }
//     return count;
// }
// let binarystring = '000011100100'
// console.log(count_zero(binarystring));


// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(odd_even){
    if(odd_even%2==0){
        return 'even'
    }
    else{
        return 'odd';
    }
}
console.log(odd_even(21));