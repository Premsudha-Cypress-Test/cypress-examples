let myname = " Premsudha is my name";

console.log(myname.toUpperCase())
console.log(myname.toLowerCase())
console.log(myname.trim())
console.log(myname.trimStart())
console.log(myname.trimEnd())
console.log(myname.repeat(2))
let sentence= "i am premsudha"
let w1 = sentence.replace('premsudha','Yashoda')
console.log(w1)


let data =["darshu","kunju","shala"]
let w2=data.join('-')
console.log(w2)

let data2 ="darshu velamkar";
let w3 =data2.split("a")
console.log(w3)

let str = "premsudha vasumani"
z1=str.charAt(2)
console.log(z1)
z2=str.charCodeAt(2)
console.log(z2)


let friends = ["darshu","kunju","shala","devi"]
let z3=friends.includes("khala")
console.log(z3)

let bae="darshani"
let z4=bae.startsWith('D')
console.log(z4)
let z5=bae.endsWith('i')
console.log(z5)
let z6 = bae.includes('r')
console.log(z6)
console.log(bae.length);

//#reverse a string

let str1="karan"
rev=""
for(i=0;i<=str1.length-1;i++){
    rev=str1[i]+rev
}
console.log(rev)

old="premsudha"
newstr="";
for(i=old.length-1;i>=0;i--){//a
newstr=newstr+old[i]//ha
}
console.log(newstr)


let ex="I like js and js is my fav of all programs"
e1=ex.replace("js","py")
console.log(e1)

e2=ex.replaceAll("js","py")
console.log(e2)