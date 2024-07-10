let button = document.getElementById("btn");
button.addEventListener("click", () => {
    document.querySelector(".box").innerHTML = "<b>Clicked !</b>"
})

document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("Child Was clicked")
})

document.querySelector(".childContainer").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("childContainer Was clicked")
})

document.querySelector(".container").addEventListener("click", (e) => {
    alert("container Was clicked")
})

function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

let a = setInterval(() => {
    document.querySelector(".childContainer").style.background = getRandomColor();
}, 1000);

console.log(a)