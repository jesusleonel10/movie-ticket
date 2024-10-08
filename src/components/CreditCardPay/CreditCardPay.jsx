import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TicketContext } from '../../context/ticket';
import BtnBack from '../BtnBack/BtnBack'
import CardFront from './../../assets/images/bg-card-front.png'
import CardBack from './../../assets/images/bg-card-back.png'
import Logo from './../../assets/images/card-logo.svg'
import { checkEmpty, checkRegex, showError, showSuccess } from './../../functions/validationInputs'

import './CreditCardPay.scss'

const CreditCardPay = () => {
    const [dataPay, setDataPay] = useState(null);
        
    const { id } = useParams();
    const {ticket, setTicket} = useContext(TicketContext)

    

    
    // useEffect(() => {
    //     /* --- Mostrar texto de los inputs en las tarjetas --- */
    //     const showValuesInCards = () => {
    //         inputs.forEach((element, index) => {
    //             element.addEventListener('input', (e) => {
    //                 element.value != '' ?
    //                     textCard[index].textContent = e.target.value
    //                 :
    //                 index === 0 ? textCard[index].textContent = '0000 0000 0000 0000':
    //                 index === 1 ? textCard[index].textContent = 'JANE APPLESEED':
    //                 index === 2 ? textCard[index].textContent = '00':
    //                 index === 3 ? textCard[index].textContent = '00':
    //                 index === 4 ? textCard[index].textContent = '000': ""
            
    //             })
    //         })
    //     }
        
    //     showValuesInCards()
        
    // }, [inputs, textCard]);
    
    /* --- Funciones para validar cada input --- */

    const checkName = (input) => {
        const cardNameValue = input.value.trim()
        if (!checkEmpty(input.value)) {
            showError(input, 'No puede estar vacio')
        } else if (!checkRegex(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/, cardNameValue)) {
            showError(input, 'Solamente Letras')
        } else if (cardNameValue.length <= 5 || cardNameValue.length > 18) {
            showError(input, '8 Caracteres minimos y 18 como máximo')
        } else {
            showSuccess(input)
            return true
        }
    }

    const checkNumberCard = (input) => {
        const cardNumberValue = input.value.replace(/ /g,'')
        if (!checkEmpty(input.value)) {
            showError(input, 'No puede estar vacio')
        } else if (!checkRegex(/^[0-9]+$/, cardNumberValue)) {
            showError(input, 'Solamente Números')
        } else if (cardNumberValue.length != 16) {
            showError(input, 'Deben ser 16 digitos exactos')
        } else {
            showSuccess(input)
            return true
        }
    }

    const checkDateMM = (input) => {
        const cardDatemmValue = input.value.replace(/ /g,'')
        if (!checkEmpty(input.value)) {
            showError(input, 'No puede estar vacio')
        } else if (!checkRegex(/^[0-9]+$/, cardDatemmValue)) {
            showError(input, 'Solamente Números')
        } else if (cardDatemmValue.length != 2) {
            showError(input, 'Valor incorrecto')
        } else if (parseFloat(cardDatemmValue) < 0 || parseFloat(cardDatemmValue) > 12) {
            showError(input, 'Valor incorrecto')
        } else {
            showSuccess(input)
            return true
        }
    }

    const checkDateYY = (input) => {
        const cardDateyyValue = input.value.replace(/ /g,'')
        if (!checkEmpty(input.value)) {
            showError(input, 'No puede estar vacio')
        } else if (!checkRegex(/^[0-9]+$/, cardDateyyValue)) {
            showError(input, 'Solamente Números')
        } else if (cardDateyyValue.length != 2) {
            showError(input, 'Valor incorrecto')
        } else if (parseFloat(cardDateyyValue) < 22 || parseFloat(cardDateyyValue) > 30) {
            showError(input, 'Valor incorrecto')
        } else {
            showSuccess(input)
            return true
        }
    }

    const checkDateCvc = (input) => {
        const cardCvcValue = input.value.replace(/ /g,'')
        if (!checkEmpty(input.value)) {
            showError(input, 'No puede estar vacio')
        } else if (!checkRegex(/^[0-9]+$/, cardCvcValue)) {
            showError(input, 'Solamente Números')
        } else if (cardCvcValue.length != 3) {
            showError(input, 'Valor incorrecto')
        } else {
            showSuccess(input)
            return true
        }
    }

    const handleChange = (event) => {
        const value = event.target.value
        const order = event.target.dataset.sort
        
        //Los inputs y su casilla en la tarjeta respectivamente, la idea es tenerlos en el mismo orden
        const infoCard = document.querySelectorAll('.datacard')

        //Cambio el orden en que estan los inputs para que esten igual en orden que con la tarjeta
        const textCard = [...infoCard].sort( (a,b) => { return a.dataset.sort - b.dataset.sort })

        textCard.forEach((element, index) => {
            value !== '' ?
                order === element.dataset.sort ?
                    element.textContent = value
                : null
            :
            index === 0 ? element.textContent = '0000 0000 0000 0000':
            index === 1 ? element.textContent = 'JANE APPLESEED':
            index === 2 ? element.textContent = '00':
            index === 3 ? element.textContent = '00':
            index === 4 ? element.textContent = '000': ""
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        const inputForm = document.querySelectorAll('input:not([type="submit"])')

        const checkForm = {
            nameCard: checkName(inputForm[0]),
            numberCard: checkNumberCard(inputForm[1]),
            dateM:checkDateMM(inputForm[2]),
            dateY: checkDateYY(inputForm[3]),
            cvcCard: checkDateCvc(inputForm[4])
        }
        // setDataPay(checkForm)
        console.log(inputForm);
    }

    return (
        <div className="creditcard-pay">
            <div className="creditcard-pay__data">
                <BtnBack href={`/schedules/${id}`}
                                    />
                <div className="card">
                    <div className="card__back">
                        <span className="datacard card__back__number" data-sort="5">000</span>
                        <img className='cardimgback' src={CardBack} alt="Credit card back" />
                    </div>
                    <div className="card__front">
                        <img className='cardimgfront' src={CardFront} alt="Credit card front" />
                        <img className='logo' src={Logo} alt="Logo credit card" />
                        <div className="card__front-info">
                            <span className="datacard card__front-info__number" data-sort="1">0000 0000 0000 0000</span>
                            <span className="datacard card__front-info__name" data-sort="2">Nombre y Apellido</span>
                            <div className="card__front-info__date">
                                <span className='datacard ' data-sort="3">00</span>
                                /
                                <span className='datacard ' data-sort="4">00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="creditcard-pay__form">
                <form id="form" onSubmit={handleSubmit}>
                    <label className="formcard__labels" htmlFor="card-name">Titular de la Tarjeta</label>
                    <input className="formcard__inputs" type="text" name="cardname" id="card-name" placeholder="e.g. Jane Appleseed" maxLength="24" data-sort="2" onChange={handleChange} />
                    <span className="error" data-sort="2">Solamente deben ser letras</span>
    
                    <label className="formcard__labels" htmlFor="card-number">Numero de la Tarjeta</label>
                    <input className="formcard__inputs" type="text" name="cardnumber" id="card-number" placeholder="e.g. 1234 5678 9123 0000" data-sort="1" maxLength="19" data-mask="0000 0000 0000 0000" onChange={handleChange} />
                    <span className="error" data-sort="1">Solamente deben ser numeros</span>
                    
                    
                    <label className="formcard__labels" htmlFor="card-date__mm">Fecha Exp. (MM/YY)</label>
                    <input className="formcard__inputs" type="text" name="datemm" id="card-date__mm" placeholder="MM" maxLength="2" data-sort="3" data-mask="00" onChange={handleChange} />
                    <span className="error" data-sort="4">No puede estar en blanco</span>
                    <input className="formcard__inputs" type="text" name="dateyy" id="card-date__yy" placeholder="YY" maxLength="2" data-sort="4" data-mask="00" onChange={handleChange} />
                    <span className="error" data-sort="3">No puede estar en blanco</span>
                
                
                    <label className="formcard__labels" htmlFor="card-cvc">CVC</label>
                    <input className="formcard__inputs" type="text" name="cardcvc" id="card-cvc" placeholder="e.g. 123" maxLength="3" data-sort="5" data-mask="000" onChange={handleChange} />
                    <span className="error" data-sort="5">No puede estar en blanco</span>
    
                    <div className="formcard__submit">
                    <button id="submit" className="submit" type="submit">
                        <span className="confirm">Confirmar</span>
                        <i className="check fa-solid fa-check"></i>
                        <span className="spinner"></span>
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default CreditCardPay;