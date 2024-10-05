let Add = document.querySelector("div button");
let Minus = document.querySelector("div button:nth-child(2)");
let body = document.querySelector("body");
let select = document.querySelector("select");

let font = parseFloat(getComputedStyle(body).fontSize);

Add.onclick = function() {
    font += 1;
    body.style.fontSize = font + "px"; 
};

Minus.onclick = function() {
    font -= 1;
    body.style.fontSize = font + "px"; 
};

select.addEventListener("change", () => {
    body.style.backgroundColor = select.value; 
});
