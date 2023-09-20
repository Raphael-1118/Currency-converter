console.log("Hello everyone!!! Ten kod jest już w repozytorim Git");

let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");

let EUR = 4.46;
let USD = 4.07;
let CHF = 4.55;
let GBP = 5.17;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
  
    let amount = +amountElement.value;
    let currency = currencyElement.value;
    
    let result;

    switch (currency) {
        case "EUR":
            result = amount / EUR;
            break;

        case "USD":
            result = amount / USD;
            break;

        case "CHF":
            result = amount / CHF;
            break;

        case "GBP":
            result = amount / GBP;
            break;
    }

    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
});