{
console.log("Hello everyone!!! Ten kod jest już w repozytorim Git");

const calculateResult = (amount, currency) => {
        const EUR = 4.46;
        const USD = 4.07;
        const CHF = 4.55;
        const GBP = 5.17;

        switch (amount, currency) {
            case "EUR":
                return amount / EUR;
                
            case "USD":
                return amount / USD;
                
            case "CHF":
                return amount / CHF;

            case "GBP":
                return amount / GBP;
        }
    };

    const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
    }

    const onFormSubit = (event) => {
        event.preventDefault();
    
        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");
       
    
        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);  

        updateResultText(amount, result, currency)
        resetForm(); 
        
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubit); 

    }; 

    init ();

    const resetForm = () => {
        const resetElement = document.querySelector(".js-reset");
        const resultElement = document.querySelector(".js-result");
        resetElement.addEventListener("click", () => {
            resultElement.innerText = "0";     
        });  
    };    
    
    resetForm()

};