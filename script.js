const form = document.querySelector("#parking-form")
const msgDiv = document.querySelector("#msg")

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
    // removeMessage()
    formIsValid = true

    // ValidateCC()
    // ValidateExp()

    if (formIsValid) {
        let days = document.querySelector("#days")
        document.getElementById("total").innerText = `Sucess! Total Amount Paid: $${5 * days.value}`
    }
}

const expDate = form.querySelector("#expiration")
function validateExp() {
    
}
