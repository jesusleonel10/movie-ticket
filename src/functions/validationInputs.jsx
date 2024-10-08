//Si esta vacio el valor del input
const checkEmpty = (value) => {
    return value != '' 
}
//Validamos con regex
const checkRegex = (regex, value) => {
    return regex.test(value)
}
//Recibe el input para buscar el elemento siguiente (span) para mostrarlo y poner un mensaje
const showError = (input, message) => {
    const formControl = input.nextElementSibling
    formControl.style.visibility = 'visible'
    formControl.textContent = message
    input.className = "formcard__inputs wrong"
}
//Lo mismo pero solamente resaltamos en verde
const showSuccess = (input) => {
    const formControl = input.nextElementSibling
    formControl.style.visibility = 'hidden'
    input.className = "formcard__inputs success"
}

export { checkEmpty, checkRegex, showError, showSuccess }