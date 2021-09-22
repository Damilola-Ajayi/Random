let num;
let btn = document.querySelector("#btn");
let result = document.querySelector("#result");
let random;
let text = document.querySelector(".text");

// //CODE FOR COUNTDOWN
// let seconds = document.querySelector("#countdown").textContent;
// let countdown = setInterval (function(){
//     seconds--;
//     document.querySelector("#countdown").textContent = seconds;
//     if (seconds <= 0) clearInterval(countdown);

// }, 1000); 

//  ACCEPT INPUT
function get() {
    num = document.querySelector("#input").value;
    console.log(num);
}

//GENERATE RANDOM NUMBER
function generate() {
    random = Math.floor(Math.random() * 10 + 1);
    console.log(random);
}

//COMPARES THE INPUT NUMBER WITH THE GENERATED NUMBER
function compare() {
    if (num === "") {
        result.value ="Input a number please";
        result.style.color = "red";
    } else if (num > 10){
        result.value = "A smaller number please";
        result.style.color = "red";
    } else if (num < 1){
        result.value = "A bigger number please";
        result.style.color = "blue";
    } else if (num == random){
        result.value = "Yay you are correct";
        result.style.color = "green";
    } else {
        result.value = `Try Again, correct answer is ${random}`;
        result.style.color = "red";
    }
}

// function clear () {
//     result.value = ' '
// }

function check () {
    get();
    generate();
    compare();
}

btn.addEventListener("click", check());







