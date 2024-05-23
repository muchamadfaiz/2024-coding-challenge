// Link : https://www.codewars.com/kata/5a00e05cc374cb34d100000d
// for (let i = 0; i < 5; i++) {
//     console.log("Hello World", i);
//     console.log(5 - i);
// }

// // Solution #1
// const reverseSeq = (n) => {
//     let array = [];
//     for (let i = 0; i < n; i++) {
//         array.push(n - i);
//     }
//     return array;
// };

// Solution #2
// const reverseSeq = (n) => {
//     let result = [];
//     for (let i = n; i >= 1; i--) {
//         result.push(i);
//     }
//     return result;
// };

// Solution #3
// const reverseSeq = (n) => {
//     return [...Array(5)].map((_, i) => i + 1).reverse();
// };

// Solution 4
const reverseSeq = (n) => {
    return Array(5)
        .fill()
        .map((_, i) => i + 1)
        .reverse();
};

console.log(reverseSeq(5));
