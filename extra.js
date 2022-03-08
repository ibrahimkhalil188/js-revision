//আরো পাঁচটা জিনিস জানতে হবে। 

//১.১ অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা ২ দিয়ে গুণ করে গুণফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const namta = number.map(n => n * 12)

//১.২. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয় সেটার একটা সামারি লিখে ফেলো।

// map run a fucntion every element  of an array then return a new array

// forEach do same like map without return

// run a function on every element of an array with checking condition if condition is true then return an arry with true value

// find only return the first element 


//২. ternary অপারেটর কি ? এইটা দিয়ে শর্টকার্টে কিভাবে if-else লিখে 

// short cut of if else 

const a = 5;
const b = 10;

const ternary = a > b ? "a is greater then b" : "a is less then b"

//৩. লজিক্যাল এন্ড (&&) আর লজিক্যাল or (।।) এই দুইটা সম্পর্কে হালকা ধারণা 

//&& output will be true if both condition is true
// || outupt will be true if one condition is true

//৪. JSON এর stringify এবং parse কখন কোনটা ইউজ করে 

// stringify need when a make a js file to json file.
// parse need when i will make a json file to js file

//৫. ++, --, +, +'', +=, -= এইগুলা কি জিনিস। কোনটা দিয়া কি করে সেটা বুঝলেই হবে। তাছাড়া active = !active এইটা এর মানে কি। 

// ++ is increasement -- decreasement + add number += plus and equal a+=b or a = a+b same -=

//active = !active not active aill assign active 

/* 

৬. Object.keys, Object.values জিনিসগুলা জানা থাকলেও ভালো।  */

const studens = {
    name: "ibrahim", id: 344, dep: "phy", sub: "math"
}
console.log(Object.keys(studens))
console.log(Object.values(studens))
console.log(Object.entries(studens))