let btn1 = document.getElementById("list1");
let btn2 = document.getElementById("list2");
let btn3 = document.getElementById("list3");
let btn4 = document.getElementById("list3");
let btn5 = document.getElementById("list5");

const back = document.querySelector("#contain");

btn1.addEventListener("click", () => {
    back.style.backgroundColor = "#f21170"
    back.style.Color = "#fff"
})

btn2.addEventListener("click", () => {
    back.style.backgroundColor = "#325288"
})

btn3.addEventListener("click", () => {
    back.style.backgroundColor = "#bdc7c9 "
})

btn4.addEventListener("click", () => {
    back.style.backgroundColor = "#194350"
})

btn5.addEventListener("click", () => {
    back.style.backgroundColor = "#93329e"
})