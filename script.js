const displayScreen = document.getElementById("displayScreen");
const displayButtons = document.getElementsByClassName("displayButtons");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

for (i = 0; i < displayButtons.length; i++) {
    let currentButton = displayButtons[i];
    currentButton.addEventListener("click", function () {
        displayScreen.innerHTML += currentButton.innerText;
    });
};

clear.addEventListener("click", function () {
    displayScreen.innerText = "";
});

// equals.addEventListener("click", function () {
//     let sum = displayScreen.innerText;
//     const findNumbers = /\d+(?:\.\d+)?/g;
//     const findOperators = /[+\-×÷]/g;
//     console.log(sum.match(findNumbers));
//     console.log(sum.match(findOperators))

// });


// displayScreen.innerText = "45 34 6 88.8";

equals.addEventListener("click", function () {
    let expression = displayScreen.innerHTML;
    let convertedExpression = expression.replace(/×/g, "*");
    convertedExpression = convertedExpression.replace(/÷/g, "/")
    convertedExpression = convertedExpression.replace(/^0+/g, "");

    if (!/\d$/.test(convertedExpression)) {
        displayScreen.innerHTML = "Error: Incomplete Formula - clear and try again";
    };

    let result = eval(convertedExpression);
    displayScreen.innerHTML = result;

    if (result === Infinity) {
        displayScreen.innerHTML = 0;
    }

});
