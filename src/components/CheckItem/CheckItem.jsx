import './CheckItem.scss'
import PropTypes from 'prop-types'

const CheckItem = ({id, string, type, times, timesSelected, setTimesSelected}) => {

    const handleChange = (arr) => {
        setTimesSelected(arr)
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
                    onChange={() => handleChange(times)} 
                    checked={timesSelected === times} />
                <label htmlFor={id}>
                    <span>{string}</span>
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