const form = document.querySelector("#parking-form")
const msgDiv = document.querySelector("#msg")
const ccNumber = document.querySelector("#credit-card")

//creating date for html validation mins and maxes
const today = new Date()

//create max car year
const yearInput = document.querySelector("#car-year")
yearInput.max = (today.getFullYear() + 1)

//create min start date
const startDate = document.querySelector("#start-date")
let dd = today.getDate()
let mm = today.getMonth() + 1
let yyyy = today.getFullYear()

if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}

todayDate = yyyy + '-' + mm + '-' + dd
startDate.min = todayDate
startDate.value = todayDate


let formIsValid

//submitting the form
form.addEventListener("submit", function(event) {
    event.preventDefault()
    validateForm()
})

function validateForm() {
    removeMessage()
    validateExp()
    if (validateCC(ccNumber.value)) {
        if (formIsValid) {
            let days = document.querySelector("#days")
            document.getElementById("total").innerText = `Sucess! Total Amount Paid: $${5 * days.value}`
        }
    } else {
        showMessage('Please enter a valid Credit Card number')
        formIsValid = false
    }
}


function validateCC(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}

const expDate = form.querySelector("#expiration")
function validateExp() {
    expYear = expDate.value.slice(3)
    if (expYear >= yyyy.toString().slice(2)) {
        console.log("expiration date is valid")
    } else {
        showMessage('Expiration Date must be in the future')
        formIsValid = false
    }
}

function removeMessage() {
    if (msgDiv) {
        msgDiv.innerHTML = ''
        formIsValid = true
    }
}

function showMessage(message) {
    msgDiv.innerHTML = `<div class="YIKES">${message}</div>`
}