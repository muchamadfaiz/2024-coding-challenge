// Link :
// 3/365

// Solution #1
// function hero(bullets, dragons) {
//     if (bullets / dragons >= 2) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // Solution #2
// function hero(bullets, dragons) {
//     return bullets / dragons >= 2 ? bullets / dragons >= 2 : false;
// }

// Solution #3
function hero(bullets, dragons) {
    return bullets / dragons >= 2;
}
console.log(hero(10, 5));
