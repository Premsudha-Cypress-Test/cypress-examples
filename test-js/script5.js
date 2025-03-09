let info ={
    fname:"premsudha",
    lname:"vasumani",
    age:27,
    phone:8655413099
}
console.log(info.fname)
console.log(info)
console.log(info['lname'])

info.lname="gupta"
console.log(info)

info["phone"]=9769093040
console.log(info)

delete info.age
console.log(info)

info.mname="Thippanna"
console.log(info)

delete info["mname"]
console.log(info)

for(let key in info){
    console.log(key,info[key])
}
let fname ="premsudha"
let lname="vasumani"
console.log(`my firstname is ${fname } and my lastname is ${lname}`)




let a=10;
let b=5;
let c = "hello"
console.log(a+b+c)
console.log(c+a+b)
console.log(a+c+b)



