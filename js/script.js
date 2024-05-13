// variáveis
import {modal} from './modal.js'
import { alertError } from './alert-error.js'
import { calculateIMC, notANumber } from './utils.js'


const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//ENVIO DO SUBMIT
form.onsubmit = (event) => {
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if(weightOrHeightIsNotANumber){
        alertError.open()
        return;
    }
    
    alertError.close()

    const result = calculateIMC(weight, height)
    const message = `O seu IMC é de ${result}`
    
    modal.message.innerText = message
    modal.open()
}

//fechado o erro ao escrever

inputWeight.oninput = () => alertError.close()
inputHeight.oninput = () => alertError.close()


