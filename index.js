let plus = document.querySelector(".plus")
let h1 = document.querySelector("h1")

plus.addEventListener("click", () =>{
    h1.textContent = Number(h1.textContent) + 1;
})