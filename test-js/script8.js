//map
let n = [11, 22, 33, 44, 55]
let q1 = n.map(function (el, index, arr) {
    return el + 2;
})
console.log(q1);


//filter
q2 = n.filter(function (el, index, arr) {
    return el > 33;
})
console.log(q2)

//forEach

let m = ["mum", "pune", "hyderabad"]
let q3 = m.forEach(function (el, index, arr) {
    console.log("welcome " + el)
})

//reduce

let o = [11, 22, 33, 44, 55]
q4 = o.reduce(function (acc, el, index, arr) {
    return acc + el;
}, 0)
console.log(q4)

//find
let p = [11, 22, 33, 44, 55]
let q5 = p.find(function (el, index, arr) {
    return el > 11;
})
console.log(q5)


//findIndex
let q = [11, 22, 33, 44, 55]
let q6 = p.findIndex(function (el, index, arr) {
    return el > 11;
})
console.log(q6)

//every
let r = [11, 22, 33, 44, 55]
let q7 = p.every(function (el, index, arr) {
    return el >= 44;
})
console.log(q7)

//some
let s = [11, 22, 33, 44, 55]
let q8 = p.some(function (el, index, arr) {
    return el > 40;
})
console.log(q8)