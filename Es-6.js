/*  ES6 রিলেটেড সাতটা জিনিস তোমাকে জানতে হবে  */

/* ১. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে অবজেক্ট এর প্রপার্টি এর মান কিভাবে বসায় সেটা জানতে হবে। বিশেষ করে নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। বা কোন একটা অবজেক্ট এর প্রপার্টি array সেই array থেকে ভ্যালু এনে কিভাবে টেমপ্লেট স্ট্রিং এর মধ্যে বসাতে পারবে ।  */

const object = {
    arrayOfObj: [
        { name: "watch", brandName: "Apple", Price: 2399, color: "silver" },
        { name: "phone", brandName: "Apple", Price: 23484, color: "white" },
        { name: "laptop", brandName: "lenovo", Price: 2399, color: "black" }],
    name: "Apple",
    Array: [3, 4, 5, 6, 7, 7, { Name: "ibrahim", color: "black" }
    ]
}
const tem = `My phone brandeName: ${object.arrayOfObj[1].brandName}, My Name: ${object.Array[6].Name}`

/* . স্প্রেড অপারেটর (...) কিভাবে কাজ করে। বিশেষ করে একটা array কে কপি করে নতুন করে array বানাবে এবং সেখানে একটা উপাদান যোগ করবে। 
আবার একটা উপাদান কে বাদ দিয়ে বাকি সব উপাদানকে কিভাবে যোগ করবে (filter ইউজ করে) */

const number = [3, 6, 3, 6, 7, 8, 9]
const newArray = [...number, 2]
const filternumber = number.filter(num => num !== 6)

//৩.১. শূন্য প্যারামিটারওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৯ রিটার্ন করবে। 

const zero = () => 9;

//৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ১২ দিয়ে গুণ করে গুণফল রিটার্ন করবে।

const one = num => num * 12;

//৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে চার দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও। 

const two = (num1, num2) => (num1 + num2) / 4;

//৩.৪ একাধিক লাইনওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৫ যোগ করবে তারপর যোগফল দুইটাকে আবার গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

const multi = (num1, num2) => {
    const num11 = num1 + 5;
    const num22 = num2 + 5;
    return num11 * num22
}

//৪. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

const subject = ["bangla", "english", "Math", "physics", "chemistry"]

const friend = { name: "tamim", college: "titumir", dep: "zolog", subject: { mejor: "botany", minor: "Bangla" } }

const [, balance] = subject
const { name, minor } = friend.subject

//৫. shorthand দিয়ে অবজেক্ট কিভাবে ডিক্লেয়ার করে, {a , b } স্টাইলে।

const x = 5;
const y = 10;
const obj = { x, y };
console.log(obj)

//৬. ফাংশন এর মধ্যে ডিফল্ট প্যারামিটার কিভাবে ডিক্লেয়ার করে 

const addNum = (num1 = 6, num2 = 10) => num1 + num2;

//৭. অপশনাল চেইনিং কি জিনিস, সেটা কখন কিভাবে ইউজ করে ? না জানলে গুগলে সার্চ দাও 