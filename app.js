// 1.Berilgan foydalanuvchi ismlari massividan
//  eng uzun ismni toping.
function longestName(arr) {
    arr.sort((a, b) => b.length - a.length)
    return arr[0]
}

console.log(longestName(["Alice", "Bob", "Christina", "David"])); // "Christina"

// 2.Berilgan qator ichidagi bir xil belgilarni
//  olib tashlab, yangi qator hosil qiling.
function removeConsecutiveDuplicates(str) {
    let arr = []
    for(let i = 0 ; i < str.length;i++){
        if(!arr.includes(str[i])){
            arr.push(str[i])
        }
    }
    return arr.join("")
}

console.log(removeConsecutiveDuplicates("aaabbbcccaaa")); // "abc"

// 3.Berilgan massivning elementlarini k
//  qadamga o'ngga ko'chiring.
function rotateArray(arr, k) {
     k = k % arr.length
    if(k < 0){
        let k = arr.length + k
    }
    let revers = arr.slice(arr.length - k).concat(arr.slice(0, arr.length - k));
    
    return revers;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]

// 4.Berilgan ikki o'lchamli massivni
//  bitta tekis qatorga aylantiring.
function flattenArray(arr) {
    return arr.flat(Infinity)
}

console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]


// 5.Berilgan son n uchun n x n
//  ko'paytirish jadvali yaratish.
function multiplicationTable(n) {
 let revers = []
 for(let i = 1;i <= n ; i++){
    let row =[]
    for(let j = 1; j <= n; j++){
        row.push(i*j)
    }
     revers.push(row)
 }
 return revers
}

console.log(multiplicationTable(3));
// [
//   [1, 2, 3],
//   [2, 4, 6],
//   [3, 6, 9]
// ]

// 6.Berilgan massivni ikkita teng qismga ajrating. Agar massivning
//  uzunligi toq bo'lsa, markaziy elementni ikkinchi qismga qo'shing.
function splitArrayInHalf(arr) {
    let num1 = Math.floor(arr.length / 2);
    let num2 = arr.slice(0, num1);
    let num3 = arr.slice(num1);
    return [num2,num3];
}

console.log(splitArrayInHalf([1, 2, 3, 4, 5])); // [[1, 2, 3], [4, 5]]
console.log(splitArrayInHalf([1, 2, 3, 4]));    // [[1, 2], [3, 4]]

// 7.Berilgan kvadrat matritsaning asosiy 
// va yordamchi diagonallarini almashtiring.
function swapDiagonals(matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        let num = matrix[i][i];
        matrix[i][i] = matrix[i][n - 1 - i];
        matrix[i][n - 1 - i] = num;
    }
    return matrix;
 }
 
 console.log(swapDiagonals([
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]
 ]));
 // [
 //   [3, 2, 1],
 //   [4, 5, 6],
 //   [9, 8, 7]
 // ]

//  8.Berilgan massivdagi barcha elementlarning eng
//   katta umumiy bo'luvchisini toping.
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}
function findGCD(arr) {
    if (arr.length === 0) ;
    return arr.reduce((accumulator, currentValue) => gcd(accumulator, currentValue));

}

console.log(findGCD([24, 36, 48])); // 12
console.log(findGCD([7, 14, 21]));  // 7

