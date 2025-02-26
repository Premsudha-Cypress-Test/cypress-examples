let arr = [11, 22, 66, 99, 1, 56, 88]
let highest = arr[0]
function max(arr) {
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i];
        }

    }
    return highest;
}
console.log(max(arr));