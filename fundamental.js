/* প্রোগ্রামিংয়ের ছয়রত্ন কি তুমি কি জানো: */

/* ১. কিভাবে let, const দিয়ে ভেরিয়েবল লিখতে হয়,কখন কোনটা ইউজ করে তুমি কি জানো ? */

// const use for declare a variable which value is fixed. never redeclare or reassign

const myFathersName = "jalil Shikder"
const myName = "Mohammad ibrahim kahlil"

// let use for a chanig variable 

let age = 21
//after one year 
age = 22;



/* ২.১ কিভাবে কন্ডিশন লিখতে হয়, ছয় রকমের কন্ডিশন (>, <, ===, !==, >=. <=) কোনটা কোন জিনিসের জন্য ইউজ করবে। এছাড়াও && বা ।। দিয়ে কিভাবে একাধিক কন্ডিশন এর মধ্যে দুইটাই ফুলফিল করতে হবে আবার দুইটার যেকোন একটা ফুলফিল করতে হবে, সেটা কিভাবে করবে  */

const a = 5;
const b = 10;
const c = 5;
const greater = b > a && b > c// > grater then sign
const lessthen = a < b && c < b// < less then sign
let d = c === a //true // === check data type and equality 
d = c !== a //false// !== not equal and data type is same
// >= greater then and equal sing
// <= less then and equal sing

/* ২.২. এক বা একাধিক কন্ডিশন দিয়ে কিভাবে if-else লিখে আবার কখন if-else-if - else লিখে। সেই রকম একটা উদারহণ চিন্তা করে তুমি লিখে ফেলো  */
const x = 10;
const y = 20;
if (x > y) {
    console.log("x is greater then Y")
} else if (y > x) {
    console.log("Y is greater tehn x")
} else {
    console.log("What the hack")
}

/* ৩. array কিভাবে ডিক্লেয়ার করে array এর মধ্যে length, index, push, pop, indexOf, includes এইগুলা কিভাবে কাজ করে। কোনটা দিয়ে কি করে? সেগুলা কি তুমি জানো? */

const array = [
    { name: "watch", brandName: "Apple", Price: 2399, color: "silver" },
    { name: "phone", brandName: "Apple", Price: 23484, color: "white" },
    { name: "laptop", brandName: "lenovo", Price: 2399, color: "black" }
]
const price = array.map(x => x.Price)

const search = array.filter(x => x.name.includes("n"))

const searchPrice = array.filter(price => price.Price > 3000)


/* ৪. দুইটা বেসিক লুপ ,এর মধ্যে for loop তোমাকে জানতেই হবে। while লুপটাও দেখে রাখতে পারো। যদিও আমরা এই দুইটা লুপই কম ইউজ করবো। তাও কখনো লাগলে যেন তুমি বুঝে ফেলতে পারো।  */
let i = 0;
while (i < 5) {
    i++
}
for (let i = 0; i < 5; i++) {
}
/* ৫. function একটা অবশ্য জিনিস। বিশেষ করে সিম্পল একটা ফাংশন কখন ডিক্লেয়ার করতে হয়। কখন ফাংশন থেকে return করে। আর কিভাবে ফাংশন এর মধ্যে parameter নিতে হয়।  */
function addNumber(num1, num2) {
    const result = num1 + num2;
    return result
}
const sum = addNumber(20, 30)

/*
৬. আখেরি রত্ন হচ্ছে Object তাই কোন একটা অবজেক্ট কিভাবে ডিক্লেয়ার করে। সেখান property কিভাবে কিভাবে একসেস করা যায়। এছাড়াও অবজেক্ট এর প্রপার্টি এর ভ্যালু হিসেবে কিভাবে array, object ইউজ করা যায়।  */

const object = {
    arrayOfObj: [{ name: "watch", brandName: "Apple", Price: 2399, color: "silver" },
    { name: "phone", brandName: "Apple", Price: 23484, color: "white" },
    { name: "laptop", brandName: "lenovo", Price: 2399, color: "black" }],
    name: "Apple",
    Array: [3, 4, 5, 6, 7, 7, { Name: "ibrahim", color: "black" }
    ]
}
object.arrayOfObj.find(x => x.Price === 23484).Price

object.Array[6].Name