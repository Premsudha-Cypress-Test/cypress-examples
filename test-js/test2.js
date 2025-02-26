// let arr = [1, 4, 7, 2, 4, 9, 7, 6, 5, 4, 3, 2, 1, 1]
// let newarr = arr.sort((a, b) => a - b)
// console.log(newarr)
// let newarr2 = [...new Set(newarr)]
// console.log(newarr2)
// for (i = 0; i < newarr2.length; i++) {
//     console.log(newarr2[i])
//     if (i === newarr2.length - 2) {
//         console.log(newarr2[i])
//     }
// }
let arr = [1, 4, 7, 2, 4, 9, 7, 6, 5, 4, 3, 2, 1, 1];

// Step 1: Remove duplicates first using Set
let uniqueArr = [...new Set(arr)];

// Step 2: Sort the unique array in ascending order
uniqueArr.sort((a, b) => a - b);

console.log("Unique Sorted Array:", uniqueArr);

// Print all elements
for (let i = 0; i < uniqueArr.length; i++) {
    console.log(uniqueArr[i]);
}

// Print second largest element
console.log("Second Largest Number:", uniqueArr[uniqueArr.length - 2]);
