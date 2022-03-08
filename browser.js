//ব্রাউজার API সম্পর্কে চারটা জিনিস 

//১. লোকাল স্টোরেজ, সেশন স্টোরেজ কোনটা কখন ইউজ করবে। কিভাবে ইউজ করবে 
// local storage for store data long time . if i close the tap or shut down the pc local storage data will store life time . 

// session storage store data for a short time . if i close the tap or shut down pc page data will be deleted . 

/* 
localStorage.getItem()
localStorage.setItem()
JSON.stringify(filename)
JSON.parse(filename) 
this fout basic concept use for set data and get data from storage.
*/

//২. location API কিভাবে ইউজ করবে ব্রাউজারে

//৩. history API কিভাবে ইউজ করে

// for use location and history api use location and history keyWord

//৪. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে। 

const photoData = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data => showPhoto(data))

}
photoData()

const showPhoto = datas => {
    datas.forEach(data => {
        console.log(data)
        const shwoImg = document.getElementById("show-photo")
        const div = document.createElement("div")
        div.classList.add("col")
        div.innerHTML = `
            <div class="card">
            <img src="${data.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
            <h4 class="card-title">${data.title}</h4>
            </div>
            </div>`
        shwoImg.appendChild(div)

    });
}