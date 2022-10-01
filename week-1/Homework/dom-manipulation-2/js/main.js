const jumButtom = document.querySelector('.jumbotron')
const primaryButtom = document.querySelector('.btn-lrg')
const secundaryButtom = document.querySelector('.btn-secondary')
console.log(primaryButtom);

const blueButton = document.querySelector('#blueBtn')
blueButton.addEventListener('click',()=>{
    jumButtom.style.backgroundColor = '#588fbd'
    primaryButtom.style.backgroundColor = '#ffa500'
    secundaryButtom.style.backgroundColor = 'black'
    secundaryButtom.style.color = 'white'
} )

const orangeButton = document.querySelector('#orangeBtn')
orangeButton.addEventListener('click',()=>{
    jumButtom.style.backgroundColor = '#f0ad4e'
    primaryButtom.style.backgroundColor = '#5751fd'
    secundaryButtom.style.backgroundColor = '#31b0d5'
    secundaryButtom.style.color = 'white'
} )

const greenButton = document.querySelector('#greenBtn')
greenButton.addEventListener('click',()=>{
    jumButtom.style.backgroundColor = '#87ca8a'
    primaryButtom.style.backgroundColor = 'black'
    secundaryButtom.style.backgroundColor = '#8c9c08'
} )

const formulario = document.querySelector('form')

const emailInput= document.querySelector('#exampleInputEmail1')
const nameInput= document.querySelector('#example-text-input')
const descriptionInput= document.querySelector('#exampleTextarea')
const verificarInputs = (input) => input.value.length == 0  

formulario.addEventListener('submit',(e) => {
    e.preventDefault()

   
    if (!verificarInputs(emailInput) && !verificarInputs(nameInput) && !verificarInputs(descriptionInput) && emailInput.value.includes('@')) {
      const inputs = [emailInput,nameInput,descriptionInput]
       inputs.forEach((input)=> {
           input.style.backgroundColor = 'white'
           input.value = ''
       } ) 
        alert('thank you for filling out the form')

    } else {
    if (verificarInputs(emailInput) || !emailInput.value.includes('@')) {
        emailInput.style.backgroundColor = 'red'
    }
    if (verificarInputs(nameInput)) {
        nameInput.style.backgroundColor = 'red'
    }
    if (verificarInputs(descriptionInput)) {
        descriptionInput.style.backgroundColor = 'red'
    }
}
})