const jumbotron = document.querySelector(".jumbotron");
const donateABike = document.querySelector(".buttons .btn-primary");
const volunteer = document.querySelector(".buttons .btn-secondary");

const blueButton = document.querySelector("#blueBtn")
blueButton.addEventListener("click", changeBlue)

function changeBlue () {
jumbotron.style.backgroundColor = "#588fbd";
donateABike.style.backgroundColor = "#ffa500";
volunteer.style.backgroundColor = "black";
volunteer.style.color = "white";
}

const orangeButton = document.querySelector("#orangeBtn")
orangeButton.addEventListener("click", changeOrange)

function changeOrange () {
jumbotron.style.background = "#f0ad4e";
donateABike.style.backgroundColor = "#5751fd";
volunteer.style.backgroundColor = "#31b0d5";
volunteer.style.color = "white";

}

const greenButton = document.querySelector("#greenBtn")
greenButton.addEventListener("click", changeGreen)

function changeGreen () {
jumbotron.style.backgroundColor = "#87ca8a";
donateABike.style.backgroundColor = "black";
volunteer.style.backgroundColor = "#8c9c08";

}

/* DOM-MANUPLATION 2 PART 2 */

const submitButton = document.querySelector("form button")
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
   

    const emailInput = document.querySelector("#exampleInputEmail1")
    const email = emailInput.value
    const isEmailValid = email.length > 0 && email.includes("@")
    if (isEmailValid === false) {
        emailInput.style.background = "red"
    } else {
        emailInput.style.background = "white"
    }

    const nameInput = document.querySelector("#example-text-input")
    const name = nameInput.value
    const isNameValid = name.length > 0
    if (isNameValid === false) {
        nameInput.style.background = "red"
    } else {
        nameInput.style.background = "white"
    }

    const personalDescriptionInput = document.querySelector("#exampleTextarea")
    const personalDescription = personalDescriptionInput.value
    const isPersonalDescriptionValid = personalDescription.length > 0
    if (isPersonalDescriptionValid === false) {
        personalDescriptionInput.style.background = "red"
    } else {
        personalDescriptionInput.style.background = "white"
    }

    const isEverythingValid = isEmailValid && isNameValid && isPersonalDescriptionValid 
    if (isEverythingValid) {
        window.alert("thank you for filling out the form") 
        emailInput.value=""
        nameInput.value=""
        personalDescriptionInput.value=""
    }
})