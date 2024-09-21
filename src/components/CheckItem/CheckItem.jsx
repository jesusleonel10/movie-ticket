import './CheckItem.scss'
import PropTypes from 'prop-types'
import formatDate from '../../functions/formatDate';


const CheckItem = ({id, string, type, times, timesSelected, setTimesSelected}) => {

    const handleChange = () => {
        if(times) {
            setTimesSelected(times)
        }   
    }
    return (
        <>
            <div className='checkcontainer'>
                <input 
                    className='checkitem' 
                    type="radio" 
                    name={type} 
                    id={id} 
                    value={string} 
                    //Al ejecutar handleChange dateSelect pasa a ser igual a times
                    //De esa manera hago que este checked la casilla al darle click
                    //Si times no esta definido simplemente devuelvo null para el segundo grupo de input radio 
                    onChange={() => handleChange()} 
                    checked={ times ?
                        timesSelected === times 
                        : null
                    } 
                    required
                    />
                <label htmlFor={id}>
                    <span>{type === 'date' ? formatDate(string) : string}</span>
                </label>
            </div>
        </>
    );
}

CheckItem.propTypes = {
    id : PropTypes.string,
    string : PropTypes.string,
    type : PropTypes.string,
    times : PropTypes.array,
    timesSelected : PropTypes.array,
    setTimesSelected : PropTypes.func
}
 
export default CheckItem;