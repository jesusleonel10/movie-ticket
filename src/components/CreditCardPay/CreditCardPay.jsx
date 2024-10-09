import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TicketContext } from '../../context/ticket';
import BtnBack from '../BtnBack/BtnBack'
import CardFront from './../../assets/images/bg-card-front.png'
import CardBack from './../../assets/images/bg-card-back.png'
import Logo from './../../assets/images/card-logo.svg'
import { checkEmpty, checkRegex, showError, showSuccess } from './../../functions/validationInputs'
import uniqid from 'uniqid';
import { motion, AnimatePresence } from 'framer-motion';

import './CreditCardPay.scss'

const CreditCardPay = () => {
    const { id } = useParams();
    const {ticket, setTicket} = useContext(TicketContext)
    const navigate = useNavigate()
    
    /* --- Funciones para validar cada input --- */

    const checkName = (input) => {
        const cardNameValue = input.value.trim()
        if (!checkEmpty(input.value)) {
            showError(input, 'No puede estar vacío')
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
            showError(input, 'No puede estar vacío')
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
            showError(input, 'No puede estar vacío')
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
            showError(input, 'No puede estar vacío')
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
            showError(input, 'No puede estar vacío')
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

        textCard.forEach((element) => {
            order === element.dataset.sort ?
                value !== '' ?
                    element.textContent = value
                    : 
                    element.dataset.sort === '1' ? element.textContent = '0000 0000 0000 0000':
                    element.dataset.sort === '2' ? element.textContent = 'NOMBRE Y APELLIDO':
                    element.dataset.sort === '3' ? element.textContent = '00':
                    element.dataset.sort === '4' ? element.textContent = '00':
                    element.dataset.sort === '5' ? element.textContent = '000': null
            : null
        })
    }

    const successPay = () => {
        const updateTicket = {
            ...ticket,
            idPay: uniqid(),
            status: 'success'
        }
        setTicket(updateTicket)
        setTimeout(() => {
            navigate(`/schedules/${id}/ticket`)
        }, 1000)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const inputForm = document.querySelectorAll('input:not([type="submit"])')
        const submit = document.getElementById('submit')

        //Para efectos de animacion del boton y carga
        const spinner = document.querySelector('.spinner')
        const check = document.querySelector('.check-success')
        const confirm = document.querySelector('.confirm')

        const checkForm = {
            nameCard: checkName(inputForm[0]),
            numberCard: checkNumberCard(inputForm[1]),
            dateM:checkDateMM(inputForm[2]),
            dateY: checkDateYY(inputForm[3]),
            cvcCard: checkDateCvc(inputForm[4])
        }

        //Si el valor de cada key en el objeto es true
        if (Object.values(checkForm).every((value) => value === true)) {
            
            //Empieza la animacion
            if(!submit.classList.contains('loading')) {
                submit.classList.toggle('loading')
                confirm.style.display = 'none'
                spinner.style.display = 'block'
                //Termina la 'carga', vendria siendo el succes si los datos se validan en el backend
                setTimeout(() => {
                    spinner.style.display = 'none'
                    submit.classList.add('submit-success')
                    check.classList.add('check-effect')
                    successPay()
                }, 2000)

                

            } else {
                submit.classList.toggle('loading')
                spinner.style.display = 'none'
            }
        }
    }
    return (
        <AnimatePresence>
            <motion.div 
                className="creditcard-pay"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: window.innerHeight }}
                transition={{ delay: .1, duration: .2 }}
                >
                <div className="creditcard-pay__data">
                    <BtnBack href={`/schedules/${id}`}/>

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
                <motion.div 
                    className="creditcard-pay__form"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: window.innerHeight }}
                    transition={{ delay: .2, duration: .3 }}
                    >
                    <form id="form" onSubmit={handleSubmit}>
                        <label className="formcard__labels" htmlFor="card-name">Titular de la Tarjeta</label>
                        <input className="formcard__inputs" type="text" name="cardname" id="card-name" placeholder="e.g. Jane Appleseed" maxLength="24" data-sort="2" onChange={handleChange} />
                        <span className="error" data-sort="2">Solamente deben ser letras</span>
        
                        <label className="formcard__labels" htmlFor="card-number">Número de la Tarjeta</label>
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
                            <i className="check-success fa-solid fa-check"></i>
                            <span className="spinner"></span>
                        </button>
                        </div>
                    </form>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
 
export default CreditCardPay;