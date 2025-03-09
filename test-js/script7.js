

console.log("Try programiz.pro");
let cities =["mumbai","pune","banagalore","mysuru","mangaluru"]
cities.push("hampi")
console.log(cities)
cities.unshift("goa")
console.log(cities)
cities.pop()
console.log(cities)
cities.shift()
console.log(cities)
//cities.pop("mysuru")
//console.log(cities)


let new_cities = cities.filter(function(el,index,arr){
    return el !== "mysuru"

})
console.log(new_cities)

let q1=new_cities.includes("pune")
console.log(q1)


let q2=new_cities.indexOf("mumbai")
console.log(q2)

let q3=new_cities.at(1)
console.log(q3)

let q4=new_cities.reverse()
console.log(q4)

let q5=new_cities.sort()
console.log(q5)

let q6=new_cities.join(' city   ')
console.log(q6)

let states =["karnataka","Maharashtra"]

let q7=new_cities.concat(states)
console.log(q7)

let places=[["mumbai","pune"],["udaipur","jaipur"]]
console.log(places[1][0])

let q8=places.flat()
console.log(q8)





















