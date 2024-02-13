// const input = document.querySelector(".input");
// const btn = document.querySelector(".input_btn");

// let arr = [];

// btn.addEventListener("click", (e) => {
//     arr.push({title:input.value})
//     console.log(arr);
// })

let str = "ma"
let arr = [
    {
        name: "olma",
        price: 12000
    },
    {
        name: "anor",
        price: 13000
    },
    {
        name: "mandarin",
        price: 14000
    }
]

let newArr = arr.filter((el) => el.name.includes(str))

console.log(newArr);