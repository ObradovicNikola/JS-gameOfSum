const MIN = 10;
const MAX = 99;

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let a = random(MIN, MAX);
let b = random(MIN, MAX);
let sum = a + b;
let newOptions = [50, 51, 52, 53];

function playGame() {
    r = document.getElementById("report");
    r.style.display = "none";
    a = random(MIN, MAX);
    b = random(MIN, MAX);
    sum = a + b;
    let newOptions = [50, 51, 52, 53];
    for (i in newOptions) {
        newOptions[i] = random(sum - 9, sum + 9);
        while (newOptions[i] == sum)
            newOptions[i] = random(sum - 9, sum + 9);
    }
    newOptions[random(0, 3)] = sum;

    document.getElementById("num1").innerHTML = a;
    document.getElementById("num2").innerHTML = b;

    let options = document.getElementsByClassName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].innerHTML = newOptions[i];
    }
}

function checkAnswer(option) {
    r = document.getElementById("report");
    if (option.innerHTML == sum) {
        r.innerHTML = "Correct";
        r.style.background = "greenyellow";
        r.style.display = "flex";
    } else {
        r.innerHTML = "Wrong";
        r.style.background = "red";
        r.style.display = "flex";
    }
    r.classList.add("animated");
    r.classList.add("rotateIn");
}